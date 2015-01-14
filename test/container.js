var intravenous = require('intravenous');

var container = intravenous.create();

// PROD
container.register('Auth', require('../src/auth'));

// STUB
container.register('User', require('./stub/UserStub'));

module.export = container;