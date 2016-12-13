'use strict';

var User = require('./user.schema');

module.exports = {
    getUsers: function(params) {
        var user = User.find(),
            applicantQuery = {},
            positionQuery = {};

        if (params.from && params.to) {
            user.where('age').gte(params.from).lte(params.to);
        }

        if (params.skills) {
            applicantQuery = { skills: { $in: params.skills.split(',') } };
        }

        if (params.position) {
            positionQuery = { name: params.position };
        }

        user.populate('_applicant', null, applicantQuery);
        user.populate('_position', null, positionQuery);

        return user.exec(function(err, users) {
            if (err) throw err;
        });
    },
    save: function(params) {
        var user = new User(params);
        user.setAge(params.birthday);
        user.save(function(err) {
            if (err) throw err;
        });
    }
};
