const { ESLint } = require('eslint');
const path = require('path');
const fs = require('fs');
const test = require('tape');

module.exports.runTest = function(pkgName, testCaseDir, testFileName = './bad.ts') {
  test(`Test pkg: "${pkgName}" eslint config can be used.`, async t => {
    const snapFile = path.resolve(testCaseDir, './results.snap.json');
    let snap = JSON.parse(fs.readFileSync(snapFile));

    const cli = new ESLint({
      useEslintrc: false,
      baseConfig: require(path.resolve(testCaseDir, './rc.js')),
    });

    let results = await cli.lintFiles([path.resolve(testCaseDir, testFileName)]);
    results = results.map(i => {
      i.filePath = ''; // 清空 filePath 避免不同机器/部署目录 造成比对过程报错
      return i;
    });

    fs.writeFileSync(path.resolve(testCaseDir, 'now.snap.json'), JSON.stringify(results, null, 2));

    t.deepEqual(results, snap);
  });
};

module.exports.updateSnap = async function(pkgName, testCaseDir, testFileName = './bad.ts') {
  const cli = new ESLint({
    useEslintrc: false,
    baseConfig: require(path.resolve(testCaseDir, './rc.js')),
  });
  let results = await cli.lintFiles([path.resolve(testCaseDir, testFileName)]);
  results = results.map(i => {
    i.filePath = ''; // 清空 filePath 避免不同机器/部署目录 造成比对过程报错
    return i;
  });
  const filename = path.resolve(testCaseDir, './results.snap.json');
  fs.writeFileSync(filename, JSON.stringify(results, null, 2));
};
