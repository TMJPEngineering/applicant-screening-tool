'use strict';

var User = require('./user.schema');

module.exports = {
    getUsers: function(params) {
        var user = User.find(),
            options = {},
            match = {};

        if (params.from && params.to) {
            user.where('age').gte(params.from).lte(params.to);
        }

        if (params.skills) {
            match.applicant = { skills: { $in: params.skills.split(',') } };
        }

        if (params.position) {
            match.position = { name: params.position };
        }

        if (params.sort) {
            // if (params.sort === 'skills')
            //     options.applicant = { sort: { skills: 1} };
            // if (params.sort === 'preferred_salary')
            //     options.applicant = { sort: { preferred_salary: -1 } };
        }

        user.populate({ path: '_applicant', match: match.applicant, options: options.applicant });
        user.populate({ path: '_position', match: match.position, options: options.position });

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
