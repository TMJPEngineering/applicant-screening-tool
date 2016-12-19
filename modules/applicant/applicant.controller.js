'use strict';

var Applicant = require('./applicant.model');

module.exports = function(method) {
    var methods = {
        store: store
    };

    return methods[method]();

    function store() {
        return function(req, res, next) {
            Applicant.save(req.body);
        }
    }
};
