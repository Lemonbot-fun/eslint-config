const { runTest } = require('./utils');
const pkg = require('../package.json');
const path = require('path');

runTest(pkg.name, path.resolve(__dirname));

