const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)

router.get('/flights', controller.getAllFlights)
router.post('/book-flight', controller.bookFlight)
router.get('/get/:flight_id/flight', controller.getOneFlight)
router.put('/update/:flight_id/flight', controller.updateFlight)
router.delete('/delete/:flight_id/flight', controller.deleteFlight)

// {
//     title: "flight to canada",
//     time: 1pm,
//     price: 260000,
//     date: "26-06-2022"
// }
module.exports = router;

