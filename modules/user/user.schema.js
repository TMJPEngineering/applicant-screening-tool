'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    plugin = require('./../shared/shared.schema'),

    userSchema = new Mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        birthday: {
            type: Date,
            require: true
        }
    });

userSchema.plugin(plugin);

module.exports = Mongoose.model('User', userSchema);
