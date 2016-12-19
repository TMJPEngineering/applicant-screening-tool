'use strict';

var route = require('../../vendor/router');

module.exports = function(app) {
    route.get('/api/skills', 'skill.controller@index');
};
