'use strict';

var Skill = require('./skill.schema');

module.exports = {
    save: function(params) {
        var skill = new Skill(params);
        skill.save(function(err) {
            if (err) throw err;
        });
        return skill._id;
    }
};
