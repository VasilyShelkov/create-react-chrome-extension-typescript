const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  popupHtml: resolveApp('src/chrome/views/popup.html'),
  windowHtml: resolveApp('src/chrome/views/window.html'),
  backgroundHtml: resolveApp('src/chrome/views/background.html'),
  appIndexTsx: resolveApp('src/chrome/extension/app.tsx'),
  backgroundTs: resolveApp('src/chrome/extension/background.ts'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.ts'),
  appNodeModules: resolveApp('node_modules'),
  appTsConfig: resolveApp('tsconfig.json'),
  appTsLint: resolveApp('tslint.json'),
};
