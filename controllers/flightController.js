// let models = require('../models');
let Flight = require('../models/Flight');

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

exports.getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json({
            flights
        })
    } catch (error) {
        console.log("An error occured");
    }
}

exports.bookFlight = (req, res) => {
    Flight.create({
        title: req.body.title,
        time: req.body.time,
        price: req.body.price,
        date: req.body.date
    }).then((data) => {
        res.json({
            message: "Flight booked successfully",
            data
        })
    })
}

exports.getOneFlight = async (req, res) => {
    try {
        const flight = await Flight.findOne({
            _id: req.params.flight_id
        })
        res.json({
            flight
        })
    } catch (error) {
        console.log(error);
    }
}

exports.updateFlight = (req, res) => {
    Flight.updateOne(
        {
            _id: req.params.flight_id
        },{
            $set: {
                title: req.body.title,
                time: req.body.time,
                price: req.body.price,
                date: req.body.date
            }
        }).then((data) => {
            res.json({
                message: "Flight updated successfully",
                data
            })
    })
}

exports.deleteFlight = (req, res) => {
    Flight.deleteOne({
        _id: req.params.flight_id
    }).then(() => {
        res.json({
            message: "Flight deleted successfully"
        })
    })
}
