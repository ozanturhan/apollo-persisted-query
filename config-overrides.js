const path = require('path');

module.exports = {
  paths: function (paths, env) {
    console.log(__dirname);
    console.log(paths);
    paths.appIndexJs = path.resolve(__dirname, 'apps/client/src/index.js');
    paths.appSrc = path.resolve(__dirname, 'apps/client/src');
    paths.appPublic = path.resolve(__dirname, 'apps/client/public');
    paths.appHtml = path.resolve(__dirname, 'apps/client/public/index.html');
    paths.appPath = path.resolve(__dirname, 'apps/client');
    return paths;
  },
};
