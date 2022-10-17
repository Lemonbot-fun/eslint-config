
const { readdirSync } = require('fs');
const { exec } = require('child-process-promise');
const { prompt } = require('enquirer');
const path = require('path');
const semver = require('semver');
const ac = require('ansi-colors');

const projRoot = process.cwd();
const pkgsDir = path.join(process.cwd(), 'packages');
let npmCmd = 'pnpm';
if (process.platform === 'win32') {
  npmCmd = 'pnpm.cmd';
}

const releaseTypeList = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch'];

const mapedPkgInfoList = new Map(); // 按包名建立信息索引，方便快速访问
const sortedPkgInfoList = []; // 排序根据依赖层级排序的，包列表，最终的处理队列

// read & sort pkg info
(() => {
  const dirs = readdirSync(pkgsDir);
  const queuePkgInfoList = [];
  dirs.forEach(p => {
    const pkgDir = path.resolve(pkgsDir, p);
    const pkgConfPath = path.resolve(pkgDir, 'package.json');
    const pkg = require(pkgConfPath);
    const pkgInfo = {
      name: pkg.name,
      dir: pkgDir,
      deps: Object
        .entries(pkg.dependencies)
        .filter(([_, ver]) => (/^workspace:/.test(ver)))
        .map(([n]) => n),
      sort: 0,
      included: 0,
      conf: pkg,
    };
    mapedPkgInfoList.set(pkg.name, pkgInfo);
    queuePkgInfoList.push(pkgInfo);
  });
  queuePkgInfoList.forEach(i => {
    i.deps.forEach(d => (mapedPkgInfoList.get(d).included++));
  });
  while (queuePkgInfoList.length) {
    const cur = queuePkgInfoList.shift();
    if (cur.deps.length === 0) {
      sortedPkgInfoList.push(cur);
      continue;
    }

    // 如果有父级依赖未排序完成, 将当前条目排到队尾，否则加入处理序列
    if (cur.deps.some(item => {
      return !sortedPkgInfoList.includes(mapedPkgInfoList.get(item));
    })) {
      queuePkgInfoList.push(cur);
    } else {
      sortedPkgInfoList.push(cur);
    }
  }
})();

let pIndex = 0;
async function progressItem() {
  if (pIndex === sortedPkgInfoList.length) return;

  const curPkg = sortedPkgInfoList[pIndex];
  process.chdir(curPkg.dir);
  let hasChanges = false; // 自身代码是否有变更
  let depChanges = false; // 父级依赖是否有变更
  // = ---------------------------- = ask version = ---------------------------- =
  const relativeDir = path.relative(projRoot, curPkg.dir);
  try {
    await exec(`git diff --exit-code ${relativeDir}`);
    hasChanges = false;
  } catch (e) {
    hasChanges = true;
  }

  let version = curPkg.conf.version;
  if (!version) {
    throw new Error('no version in package.json');
  }

  let curTypeList = Array.from(releaseTypeList);
  let maxReleaseType = '';
  let maxReleaseTypeIndex = releaseTypeList.length - 1;
  if (curPkg.deps.length) {
    // 如果存在父级依赖，根据父包版本区间，确定子包版本区间
    maxReleaseTypeIndex = curPkg.deps.reduce((pre, cur) => {
      const depReleaseType = mapedPkgInfoList.get(cur).releaseType;
      depChanges = !!depReleaseType;
      return Math.min(pre,
        depReleaseType
          ? releaseTypeList.indexOf(depReleaseType)
          : releaseTypeList.length - 1,
      );
    }, maxReleaseTypeIndex);
    maxReleaseType = releaseTypeList[maxReleaseTypeIndex];
    curTypeList = curTypeList.slice(0, maxReleaseTypeIndex + 1);
    if (maxReleaseType.includes('pre')) {
      curTypeList = curTypeList.filter(i => /^pre/.test(i));
    }
  }

  if (!hasChanges && !depChanges) {
    // 如果自身与父级依赖均无变更，则跳过当前包
    pIndex++;
    await progressItem();
  }

  let releaseType = 'major';
  if (maxReleaseTypeIndex === 0) {
    version = semver.inc(version, releaseType, 'pre');
    console.log(`Set "${curPkg.name}" version to ${version}`);
  } else {
    const choices = curTypeList
      .reverse()
      .map(item => `${item}: ${semver.inc(version, item, 'pre')}`);

    ({ version } = await prompt({
      name: 'version',
      type: 'select',
      message: `Select release version of package "${curPkg.name}"`,
      choices,
    }));

    ([releaseType, version] = version.split(': '));
  }

  curPkg.releaseType = releaseType;
  curPkg.releaseVersion = version;

  console.log(`Pkg "${ac.yellow(curPkg.name)}" will update to version "${ac.yellow(version)}" .`);

  pIndex++;
  await progressItem();
}

async function applyVersionAndPublish() {
  if (pIndex === sortedPkgInfoList.length) return;
  const cur = sortedPkgInfoList[pIndex];
  // Set version
  try {
    if (!cur.releaseVersion || cur.releaseVersion === cur.conf.version) {
      // 如果包版本无变化，跳过
      pIndex++;
      await applyVersionAndPublish();
      return;
    }

    console.log(`Pkg "${ac.yellow(cur.name)}" publish start.`);
    process.chdir(cur.dir);
    await exec(`${npmCmd} version ${cur.releaseVersion} --no-git-tag-version`);
    const relativeDir = path.relative(projRoot, cur.dir);

    await exec(`${npmCmd} publish --access=publish --no-git-checks --registry=https://registry.npmjs.org/`);
    console.log(`${ac.green('✔')} "${relativeDir}" publish complete.`);

    pIndex++;
    await applyVersionAndPublish();
  } catch (e) {
    console.error(e.stderr || e.stdout || e);
    process.exit(1);
  }
}

(async () => {
  await progressItem();

  pIndex = 0;
  await applyVersionAndPublish();
})();

