'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    plugin = require('./../shared/shared.schema'),

    applicantSchema = new Mongoose.Schema({
        preferred_salary: {
            type: Schema.Types.Number,
            require: true
        },
        comment: {
            type: String,
            require: false,
            default: ''
        },
        _skills: [{
            type: Schema.Types.ObjectId,
            ref: 'Skill'
        }]
    });

applicantSchema.plugin(plugin);

applicantSchema.virtual('count_skills')
    .get(function() {
        return this._skills.length
    });

module.exports = Mongoose.model('Applicant', applicantSchema);
