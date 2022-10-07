const { readdirSync } = require('fs');
const { exec } = require('child-process-promise');
const path = require('path');
const ac = require('ansi-colors');

const pkgsDir = path.join(process.cwd(), 'packages');

let npmCmd = 'pnpm';
if (process.platform === 'win32') {
  npmCmd = 'pnpm.cmd';
}

(async () => {
  const res = await exec('git status --porcelain');

  if (res.stdout.toString().trim().length) {
    console.error('\nError: Unclean working tree. Commit or stash changes first.');
    process.exit(1);
  }

  const dirs = readdirSync(pkgsDir);

  let index = 0;
  async function progressItem() {
    if (index === dirs.length) return;

    const cur = dirs[index];
    const relativeDir = path.join('packages', cur);
    try {
      await exec(`git diff --exit-code ${relativeDir}`);
      index++;
      progressItem();
      return;
    } catch (e) {}

    process.chdir(path.join(pkgsDir, cur));
    exec(`pnpm publish --access=publish --repository=https://www.npmjs.com/`);

    console.log(`${ac.green('✔')} "${relativeDir}" publish complete.`);
  }

  await progressItem();
})();
