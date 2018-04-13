module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		plugins: [
			'karma-coverage',
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-ng-html2js-preprocessor',
			'karma-ng-json2js-preprocessor'
		],
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'public/javascripts/app.js',
			'public/javascripts/MainController.js',
			'client-test/MainController.spec.js'
		],
		exclude: [
		],
		preprocessors: {
			'public/javascripts/*.js': ['coverage']
		},
		reporters: ['progress', 'coverage'],
		coverageReporter: {
			dir: './clientCoverage',
			reporters: [{
				subdir: 'lcov',
				type: 'lcov'
			}]
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['ChromeHeadless'],
		singleRun: true,
		concurrency: Infinity
	})
}
