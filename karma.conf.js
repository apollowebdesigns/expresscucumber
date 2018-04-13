module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
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
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['ChromeHeadless'],
		singleRun: true,
		concurrency: Infinity
	})
}
