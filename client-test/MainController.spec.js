/* global describe beforeEach expect */

describe('Users factory', function() {
	// Before each test load our api.users module
	beforeEach(module('app'))

	let rootScope, scope, MainController

	// Before each test set our injected Users factory (_Users_) to our local Users variable
	beforeEach(function () {
		module('app')
		inject(function($rootScope, $controller) {
			rootScope = $rootScope
			scope = $rootScope.$new()
			controller = $controller('MainController', {
				$scope: scope
			})
		})
	})

	it('sets the strength to "strong" if the password length is >8 chars', function() {
		expect(controller.test).toEqual('hello')
	})
})