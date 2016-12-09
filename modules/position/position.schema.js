'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,

    positionSchema = new Mongoose.Schema({
        name: {
            type: String,
            require: true
        }
    });

module.exports = Mongoose.model('Position', positionSchema);
