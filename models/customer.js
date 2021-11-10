const mongoose = require('mongoose')
const Booking = require('../models/booking')

const CustomerSchema = new mongoose.Schema({
    userName: { type: String, required: true, minlenght: 2 },
    mail: { 
        type: String, 
        required: true,
        unique: true,
        match: / [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])? /
    },

    passWord: { type: String, required: true },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        autopopulate: { maxDepth: 2 }
    }],

})


CustomerSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Customer', CustomerSchema);
