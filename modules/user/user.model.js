'use strict';

var User = require('./user.schema'),
    Skill = require('./../skill/skill.schema');

module.exports = {
    getUsers: function(params) {
        var users = User.find(),
            options = {},
            match = {};

        if (params.from && params.to) {
            users.where('age').gte(params.from).lte(params.to);
        }

        if (params.skills) {
            match.applicant = { skills: { $in: params.skills.split(',') } };
        }

        if (params.position) {
            match.position = { name: params.position };
        }

        users.populate({ path: '_applicant', match: match.applicant, populate: { path: '_skills' } });
        users.populate({ path: '_position', match: match.position });

        return users.exec(function(err, users) {
            if (err) throw err;
        });
    },
    getUser: function(params) {
        return User.findById(params.id)
            .populate({ path: '_applicant', populate: { path: '_skills' } })
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
