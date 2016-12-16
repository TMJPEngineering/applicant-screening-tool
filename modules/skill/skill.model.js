'use strict';

var Skill = require('./skill.schema');

module.exports = {
    getSkills: function(params) {
        return Skill.find({}, params).exec(function(err, skills) {
            if (err) throw err;
        });
    },
    getSkill: function(params) {
        return Skill.findOne(params).exec(function(err, skill) {
            if (err) throw err;
        });
    },
    firstOrCreate: function(params) {
        return Skill.findOne(params).exec(function(err, skill) {
            if (err) throw err;
        }).then(function(response) {
            if (response === null) {
                var skill = new Skill(params);
                skill.save(function(err) {
                    if (err) throw err;
                });
                return skill._id;
            } else {
                return response._id;
            }
        });
    },
    save: function(params) {
        var skill = new Skill(params);
        skill.save(function(err) {
            if (err) throw err;
        });
        return skill._id;
    }
};
