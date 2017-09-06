//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],
    /*browserNoActivityTimeout:10000,*/

    preprocessors: {
        'view*/**/*.js':'coverage'
    },

    reporters: ['progress','junit','coverage'],

    coverageReporter:{
        type:'html',
        dir:'coverage'
    },
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    singleRun:true

  });
};
