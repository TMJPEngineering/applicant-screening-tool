'use strict';

var Skill = require('./skill.model');

module.exports = function(method) {
    var methods = {
        index: index
    };

    return methods[method]();

    function index() {
        return function(req, res, next) {
            Skill.getSkills(req.query).then(function(skills) {
                return res.json(skills);
            });
        }
    }
};
