var webpackConfig = require("./webpack.config.js");

// browsers: ['Chrome'],
// Remove Hostname, Port, RunnerPort

module.exports = function (config) {
    config.set({
       browsers: ['PhantomJS'],
       hostname: process.env.IP,
       port: process.env.PORT,
       runnerPort: 0,
       singleRun: true,
       frameworks: ['mocha'],
       files: ['app/tests/**/*.test.jsx'],
       preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
       },
       reporters: ['mocha'],
       client: {
           mocha: {
               timeout: '5000'
           }
       },
       webpack: webpackConfig,
       webpackServer: {
           noInfo: true
       }
    });
}
