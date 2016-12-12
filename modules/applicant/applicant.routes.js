'use strict';

var route = require('../../vendor/router');

module.exports = function(app) {
    route.post('/api/applicants', 'applicant.controller@store');
};
