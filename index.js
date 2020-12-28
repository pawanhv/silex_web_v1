
const { SilexServer, Config } = require('silex-website-builder');

const serveStatic = require('serve-static');
const path = require('path');

const config = new Config();
config.ceOptions.enableFs = true;

const silex = new SilexServer(config);

silex.app.use('/', serveStatic(path.resolve('./dist/')));

silex.start(function() {
  console.log('server started');
});