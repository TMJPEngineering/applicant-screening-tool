'use strict';

var Position = require('./position.schema');

module.exports = {
    find: function(params) {
        return Position.find(params).count().exec(function(err, position) {
            if (err) throw err;
        });
    },
    save: function(params) {
        var position = new Position(params);

        return position.save(function(err) {
            if (err) throw err;
        });
    }
};
