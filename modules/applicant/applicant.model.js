'use strict';

var Applicant = require('./applicant.schema'),
    User = require('./../user/user.model'),
    Skill = require('./../skill/skill.model'),
    Position = require('./../position/position.model');

module.exports = {
    save: function(params) {
        var skillIds = [];

        params.skills.forEach(function(skill) {
            var id = Skill.save({ name: skill.text });
            skillIds.push(id);
        });

        var applicant = new Applicant({
            preferred_salary: parseInt(params.preferred_salary),
            comment: params.comment,
            _skills: skillIds
        });

        applicant.save(function(err) {
            if (err) throw err;
        });

        var position = Position.getPosition({
            name: params.position
        }).then(function(position) {
            var positionId;

            if (position === null) {
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
