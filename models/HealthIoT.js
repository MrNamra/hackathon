const mongoose = require('mongoose')

const iotSchema = new mongoose.Schema({
    patient_id: {
        type: String,
        required: false,
        nullable: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        emun: ['male', 'female', 'other']
    },
    fever: {
        type: Boolean,
        required: true
    },
    cough: {
        type: Boolean,
        required: true
    },
    shortness_of_breath: {
        type: Boolean,
        required: true
    },
    travel_history: {
        type: Boolean,
        required: true
    },
    hospital_visits: {
        type: Number,
        required: false,
        nullable: true,
        default: 0
    },
    vaccination_status: {
        type: String,
        required: true,
        emun: ['partially vaccinated', 'vaccinated', 'not vaccinated']
    },
    infection_risk: {
        type: Number,
        required: true,
        default: 0
    },
    air_quality_index: {
        type: Number,
        required: false,
        nullable: true
    },
    population_density: {
        type: Number,
        required: false,
        nullable: true
    },
    social_media_alerts: {    
        type: String,
        required: false,
        nullable: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Health = mongoose.model('HealthIot', iotSchema)
module.exports = Health