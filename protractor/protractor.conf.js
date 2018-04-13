exports.config = {
	capabilities: {
		'directConnect': true,
		'browserName': 'chrome',
		chromeOptions: {
			args: ['--headless', '--disable-gpu', '--window-size=800x600']
		}
	},
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['todo-spec.js']
}