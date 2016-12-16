'use strict';

var Skill = require('./skill.schema');

module.exports = {
    getSkills: function(params) {
        return Skill.find({}, params).exec(function(err, skills) {
            if (err) throw err;
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
