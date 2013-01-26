basePath = '.';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'components/angular/angular.js',
    'src/**/*.js',
    'test/**/*.js'
];

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

exclude = [
];

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = ['PhantomJS'];

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit'
reporters = ['dots'];

// report which specs are slower than 500ms
reportSlowerThan = 500;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;