
const { existsSync, readdirSync } = require('fs');
const { exec } = require('child-process-promise');
const { prompt, Confirm } = require('enquirer');
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

const mapedPkgInfoList = new Map();
const sortedPkgInfoList = [];

// read & sort pkg info
(() => {
  const dirs = readdirSync(pkgsDir);
  const pkgInfoList = [];
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
    pkgInfoList.push(pkgInfo);
  });
  pkgInfoList.forEach(i => {
    i.deps.forEach(d => (mapedPkgInfoList.get(d).included++));
  });
  while (pkgInfoList.length) {
    const cur = pkgInfoList.shift();
    if (cur.deps.length === 0) {
      sortedPkgInfoList.push(cur);
      continue;
    }

    if (cur.deps.some(item => {
      return !sortedPkgInfoList.includes(mapedPkgInfoList.get(item));
    })) {
      pkgInfoList.push(cur);
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

  // = ---------------------------- = ask version = ---------------------------- =
  const relativeDir = path.relative(projRoot, curPkg.dir);
  try {
    await exec(`git diff --exit-code ${relativeDir}`);
    pIndex++;
    progressItem();
    return;
  } catch (e) {}

  let version = curPkg.conf.version;
  if (!version) {
    throw new Error('no version in package.json');
  }

  let curTypeList = Array.from(releaseTypeList);
  let maxReleaseType = '';
  let maxReleaseTypeIndex = releaseTypeList.length - 1;
  if (curPkg.deps.length) {
    maxReleaseTypeIndex = curPkg.deps.reduce((pre, cur) => {
      const depReleaseType = mapedPkgInfoList.get(cur).releaseType;
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

  let releaseType = 'major';
  if (!maxReleaseTypeIndex) {
    version = semver.inc(version, releaseType, 'pre');
  } else {
    const choices = curTypeList
      .reverse()
      .map(item => `${item}: ${semver.inc(version, item, 'pre')}`);

    ({ version } = await prompt({
      name: 'version',
      type: 'select',
      message: `Select "${curPkg.name}" release version`,
      choices,
    }));

    ([releaseType, version] = version.split(': '));

    const confirm = new Confirm({ name: 'isSure', message: `Set "${curPkg.name}" version to ${version} - are you sure?` });
    const answer = await confirm.run();
    !answer && process.exit();
  }

  curPkg.releaseType = releaseType;
  curPkg.releaseVersion = version;

  pIndex++;
  await progressItem();
}

async function applyVersion() {
  if (pIndex === sortedPkgInfoList.length) return;
  const cur = sortedPkgInfoList[pIndex];
  process.chdir(cur.dir);
  // set version
  try {
    await exec(`${npmCmd} version ${cur.releaseVersion} --no-git-tag-version`);
    pIndex++;
    await applyVersion();
  } catch (e) {
    console.error(e.stderr || e.stdout || e);
    process.exit(1);
  }
}

(async () => {
  await progressItem();

  pIndex = 0;
  await applyVersion();
})();

