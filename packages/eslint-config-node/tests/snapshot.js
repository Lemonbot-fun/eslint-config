const path = require('path');

const { updateSnap } = require('../../eslint-config-base/tests/utils');
const pkg = require('../package.json');

updateSnap(pkg.name, path.join(__dirname));
