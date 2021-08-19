const mongoose = require('mongoose')
const Booking = require('../models/booking')

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlenght: 2 },
    phoneNum: { type: Number, required: true },
    age: { type: Number, required: true, min: 16 },
    mail: String,
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        autopopulate: { maxDepth: 2 }
    }],

})


CustomerSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Customer', CustomerSchema);
