/* global angular */

(function () {
	angular
		.module('app')
		.controller('MainController', MainController)

	function MainController() {
		this.test = 'hello'
	}
})()
