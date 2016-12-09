'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,

    applicantSchema = new Mongoose.Schema({
        prefer_salary: {
            type: String,
            require: true
        },
        skills: {
            type: Array,
            require: false,
            default: []
        },
        comment: {
            type: String,
            require: false,
            default: ''
        }
    });

module.exports = Mongoose.model('Applicant', applicantSchema);
