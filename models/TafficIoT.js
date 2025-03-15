const mongoose = require('mongoose');

const iotSchema = new mongoose.Schema({
    traffic_volume: {
        type: Number,
        required: false,
        nullable: true
    },
    vehicle_speed: {
        type: Number,
        required: false,
        nullable: true
    },
    road_type: {
        type: String,
        required: true,
        enum: ['highway', 'commercial', 'rural', 'urban', 'city center', 'suburban']
    },
    weather: {
        type: String,
        required: true,
        enum: ['sunny', 'rain', 'cloudy']
    },
    temperature: {
        type:  Number,
        required: false,
        nullable: true
    },
    humidity: {
        type: Number,
        required: false,
        nullable: true
    },
    precipitation: {
        type: Number,
        required: false,
        nullable: true
    },
    accidents: {
        type: Number,
        required: true,
        default: 0
    },
    road_closure: {
        type: Boolean,
        required: true,
        default: false
    },
    event: {
        type: String,
        required: false,
        nullable: true
    },
    public_transport_usage: {
        type: Number,
        required: false,
        nullable: true
    },
    weather_temperature: {
        type: Number,
        required: false,
        nullable: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Traffic = mongoose.model('TrafficIot', iotSchema)
module.exports = Traffic