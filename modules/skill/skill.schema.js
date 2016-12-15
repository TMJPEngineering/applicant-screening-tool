'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    plugin = require('./../shared/shared.schema'),

    skillSchema = new Mongoose.Schema({
        name: {
            type: String,
            require: false,
            default: ''
        }
    });

skillSchema.plugin(plugin);

module.exports = Mongoose.model('Skill', skillSchema);
