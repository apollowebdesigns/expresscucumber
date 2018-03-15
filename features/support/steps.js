// features/support/steps.js
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const got = require('got');
const app = require('../../app');
const userRouter = require('../../routes/users');
const request = require('supertest');

Given('a variable set to {int}', function(number) {
  this.setTo(number)
})

When('I increment the variable by {int}', function(number) {
  this.incrementBy(number)
})

Then('the variable should contain {int}', function(number) {
  expect(this.variable).to.eql(number)
})

Given('a place I want to go {string}', function(string, callback) {
    console.log(string);
    callback();
})

When('I go to it {string}', function(string, callback) {
    console.log(string);
    got('http://localhost:3000/users', { json: true }).then(response => {
        console.log(response.body.url);
        console.log(response.body.explanation);
        return callback();
    })
})

Then('I get stuff back {string}', function(string, callback) {
    console.log(string);
    callback();
})

Given('a route I want to test {string}', function(string, callback) {
    console.log('the route is');
    console.log(string);
    callback();
})

When('I fire it up {string}', function(string, callback) {
    request(app)
        .get(string)
        .expect(200, callback);
})

Then('I get a working function response {string} {int}', function(string, number, callback) {
    request(app)
        .get(string)
        .expect(number, callback);
})