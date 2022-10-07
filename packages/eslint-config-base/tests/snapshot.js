const path = require('path');

const { updateSnap } = require('./utils');
const pkg = require('../package.json');

updateSnap(pkg.name, path.join(__dirname));
