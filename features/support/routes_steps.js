// features/support/steps.js
const { Given, When, Then, Before, After } = require('cucumber')
const app = require('../../app')
const request = require('supertest')
const world = require('./world').world
let getRequest

Before(() => {
	getRequest = null
})

After(() => {
	getRequest = null
})

Given('a route I want to test {string}', function(string, callback) {
	callback()
})

When('I fire it up {string} {int}', function(string, number, callback) {
	getRequest = request(app).get(string)
	callback()
})

Then('I get a working function response {string} {int}', function(string, number, callback) {
	const world = this
	console.log('what is the test?')
	console.log(world.variable)
	getRequest.expect(number, callback)
})