const webpackConfig = require('./node_modules/react-scripts/config/webpack.config.dev');

// NOTE: There is a bug in karma-webpack v3.0.4: https://github.com/webpack-contrib/karma-webpack/issues/350

module.exports = (config) => {
  config.set({
    browsers: ['Chrome_Desktop'],
    customLaunchers: {
      Chrome_Desktop: {
        base: 'Chrome',
        flags: ['--window-size=1280,1024'],
      },
    },
    files: [
      { pattern: 'src/**/__integration__/*spec.js', watched: false }
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      'src/**/__integration__/*spec.js': [ 'webpack' ]
    },

    webpack: webpackConfig
  })
}