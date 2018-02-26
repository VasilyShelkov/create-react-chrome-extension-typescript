require('shelljs/global');

exports.copyAssets = function (type) {
  var env = type === 'build' ? 'prod' : type;
  rm('-rf', type);
  mkdir(type);
  cp('src/chrome/manifest.' + env + '.json', type + '/manifest.json');
  cp('-R', 'src/chrome/assets/*', type);
};
