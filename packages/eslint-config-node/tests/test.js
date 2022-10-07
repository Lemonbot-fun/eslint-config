const { runTest } = require('../../eslint-config-base/tests/utils');

const pkg = require('../package.json');
const path = require('path');

runTest(pkg.name, path.resolve(__dirname));
