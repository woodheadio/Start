//This file isn't transpilled, so should be in node CommonJS format.

//Register Babel to transpile test files before our tests run.
require('babel-register')();

//Overwite Webpack functions that would cause Mocha to throw.
require.extensions['.css'] = function (){};
