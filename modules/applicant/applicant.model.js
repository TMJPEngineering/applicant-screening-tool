'use strict';

var Applicant = require('./applicant.schema'),
    User = require('./../user/user.model'),
    Position = require('./../position/position.model');

module.exports = {
    save: function(params) {
        console.log('applicant', params);
    }
};
