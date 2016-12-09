'use strict';

var User = require('./user.schema');

module.exports = {
    save: function(params) {
        var user = new User(params);

        user.save(function(err) {
            if (err) throw err;
        });
    }
};
