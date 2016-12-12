'use strict';

var Applicant = require('./applicant.schema'),
    User = require('./../user/user.model'),
    Position = require('./../position/position.model');

module.exports = {
    save: function(params) {
        var applicant = new Applicant({
            preferred_salary: params.preferred_salary,
            skills: params.skills,
            comment: params.comment
        });

        applicant.save(function(err) {
            if (err) throw err;
        });

        var position = Position.find({
            name: params.position
        }).then(function(position) {
            var positionId;

            if (position == 0) {
                positionId = Position.save({
                    name: params.position
                });
            } else {
                positionId = position._id;
            }

            User.save({
                name: params.name,
                birthday: params.birthday,
                _applicant: applicant._id,
                _position: positionId
            });
        });
    }
};
