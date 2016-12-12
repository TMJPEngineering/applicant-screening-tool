'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    plugin = require('./../shared/shared.schema'),

    positionSchema = new Mongoose.Schema({
        name: {
            type: String,
            require: true
        }
    });

positionSchema.plugin(plugin);

module.exports = Mongoose.model('Position', positionSchema);
