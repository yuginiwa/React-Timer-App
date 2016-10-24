var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    // browsers: ['Chrome'],
    hostname: process.env.IP,
    port: process.env.PORT,
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '30000'
      },
      timeout: '30000'
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};