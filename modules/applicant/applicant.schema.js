'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    plugin = require('./../shared/shared.schema'),

    applicantSchema = new Mongoose.Schema({
        preferred_salary: {
            type: Schema.Types.Number,
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

applicantSchema.plugin(plugin);

module.exports = Mongoose.model('Applicant', applicantSchema);
