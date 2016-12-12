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

userSchema.virtual('age')
    .get(function() {
        var today = new Date();
        var birthday = new Date(this.birthday);
        var age = today.getFullYear() - this.birthday.getFullYear();
        var m = today.getMonth() - this.birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birthday.getDate())) {
            age--;
        }
        return age;
    });

module.exports = Mongoose.model('User', userSchema);
