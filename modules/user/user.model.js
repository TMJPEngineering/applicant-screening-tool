'use strict';

var User = require('./user.schema');

module.exports = {
    get: function(params) {
        return User.find(params)
            .populate('_applicant')
            .populate('_position')
            .exec(function(err, users) {
                if (err) throw err;
            });
    },
    save: function(params) {
        var user = new User(params);

        user.save(function(err) {
            if (err) throw err;
        });
    }
};
