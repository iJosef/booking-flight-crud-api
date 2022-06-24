const mongoose = require('mongoose');

const FlightSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)
// exports.FlightSchema = FlightSchema;
module.exports = mongoose.model("Flight", FlightSchema);