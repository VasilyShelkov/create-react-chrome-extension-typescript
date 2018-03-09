// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const webpack = require('webpack');
const tasks = require('./tasks');
const config = require('../config/webpack.config.dev');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const { choosePort, createCompiler } = require('react-dev-utils/WebpackDevServerUtils');
const paths = require('../config/paths');

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.popupHtml, paths.windowHtml, paths.backgroundHtml, paths.appIndexTsx, paths.backgroundTs])) {
  process.exit(1);
}

const isInteractive = process.stdout.isTTY
if (isInteractive) {
  clearConsole();
}

console.log('[Copy assets]');
console.log('-'.repeat(80));
tasks.copyAssets('dev');

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `detect()` Promise resolves to the next free port.
choosePort(HOST, DEFAULT_PORT)
  .then((port) => {
    if (port == null) {
      // We have not found a port.
      return;
    }

    const appName = require(paths.appPackageJson).name;
    const compiler = createCompiler(webpack, config(port), appName, '',true);
    const watcher = compiler.watch({}, (err, stats) => {
      // Print watch/build result here...
      // console.log(stats);
      // console.log(err);
    })

    // ["SIGINT", "SIGTERM"].forEach(function(sig) {
    //   process.on(sig, function() {
    //     watcher.close();
    //     process.exit();
    //   });
    // });
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
