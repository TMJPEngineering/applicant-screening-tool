'use strict';

var Position = require('./position.model');

module.exports = function(method) {
    var methods = {
        index: index
    };

    return methods[method]();

    function index() {
        return function(req, res, next) {
            Position.getPositions(req.query).then(function(positions) {
                return res.json(positions);
            });
        }
    }
};
