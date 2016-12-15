'use strict';

var User = require('./user.model');

module.exports = function(method) {
    var methods = {
        index: index,
        show: show
    };

    return methods[method]();

    function index() {
        return function(req, res, next) {
            User.getUsers(req.query).then(function(users) {
                return res.json(users);
            });
        }
    }

    function show() {
        return function(req, res, next) {
            User.getUser(req.params).then(function(user) {
                return res.json(user);
            });
        };
    }
};
