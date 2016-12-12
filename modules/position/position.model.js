'use strict';

var Position = require('./position.schema');

module.exports = {
    find: function(params) {
        return Position.find(params).exec(function(err, position) {
            if (err) throw err;
        });
    },
    findOne: function(params) {
        return Position.findOne(params).exec(function(err, position) {
            if (err) throw err;
        });
    },
    save: function(params) {
        var position = new Position(params);

        position.save(function(err) {
            if (err) throw err;
        });

        return position._id;
    }
};
