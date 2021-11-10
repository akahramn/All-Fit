const mongoose = require('mongoose');

const BookingShema = new mongoose.Schema({
    Customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        autopopulate: { maxDepth: 1 }
    },
    FitnessCenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FitnessCenter",
        autopopulate: { maxDepth: 1 }
    }

})

BookingShema.plugin(require("mongoose-autopopulate"))
module.exports = mongoose.model('Booking', BookingShema);
