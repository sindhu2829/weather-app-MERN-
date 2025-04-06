const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    city: { type: String, required: true },
    country: { type: String, required: true },
    temperature: { type: Number, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    temp_min: { type: Number, required: true },
    temp_max: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    historical: [{
        date: Date,
        temp: Number,
        description: String
    }],
    alerts: [{
        sender_name: String,
        event: String,
        start: Date,
        end: Date,
        description: String
    }]
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;