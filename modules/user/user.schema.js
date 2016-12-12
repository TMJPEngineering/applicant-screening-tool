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
        },
        _applicant: {
            type: Schema.Types.ObjectId,
            ref: 'Applicant'
        },
        _position: {
            type: Schema.Types.ObjectId,
            ref: 'Position'
        }
    });

userSchema.plugin(plugin);

module.exports = Mongoose.model('User', userSchema);
