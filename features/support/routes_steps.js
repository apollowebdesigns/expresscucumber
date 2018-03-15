// features/support/steps.js
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const got = require('got');
const app = require('../../app');
const userRouter = require('../../routes/users');
const request = require('supertest');

Given('a route I want to test {string}', function(string, callback) {
    console.log('the route is');
    console.log(string);
    callback();
})

When('I fire it up {string} {int}', function(string, number, callback) {
    request(app)
        .get(string)
        .expect(number, callback);
})

Then('I get a working function response {string} {int}', function(string, number, callback) {
    request(app)
        .get(string)
        .expect(number, callback);
})