'use strict';

var route = require('../../vendor/router');

module.exports = function(app) {
    route.get('/api/users', 'user.controller@index');
    route.get('/api/users/:id', 'user.controller@show');
};
