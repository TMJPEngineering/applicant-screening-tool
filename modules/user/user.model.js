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

        user.populate({ path: '_applicant', match: match.applicant });
        user.populate({ path: '_position', match: match.position });

        return user.exec(function(err, users) {
            if (err) throw err;
        });
    },
    getUser: function(params) {
        return User.findById(params.id)
            .populate('_applicant')
            .populate('_position')
            .exec(function(err, user) {
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
