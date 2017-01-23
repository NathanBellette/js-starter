// TNeed to use common JS module system as this file is not transpiled

// Register babel to transpile files before tests are run
require('babel-register');

// Disable webpack features that mocho doesn't understand
require.extensions['.css'] = function () {};
