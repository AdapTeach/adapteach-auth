'use strict';

require('should');

var container = require('./container');
// TODO Find out why container module is not properly imported

var Auth = container.get('Auth');

describe('Test env', function () {

    it('should pass', function () {
        true.should.be.true;
        //true.should.be.false;
    });

    it('should ensure authenticated', function () {
        var next = function () {
        };

        console.log(Auth);
        //Auth.isAuthenticated(next);
    });

});