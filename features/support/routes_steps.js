// features/support/steps.js
const { Given, When, Then } = require('cucumber')
const app = require('../../app')
const request = require('supertest')

let getRequest = ''

Given('a route I want to test {string}', function(string, callback) {
	callback()
})

When('I fire it up {string} {int}', function(string, number, callback) {
	getRequest = request(app).get(string)
	callback()
})

Then('I get a working function response {string} {int}', function(string, number, callback) {
	getRequest.expect(number, callback)
})