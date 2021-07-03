const Customer = require("../models/customer")

function printBooking(booking){
    console.log(`${booking.customer.name} was sport in ${booking.fitnessCenter.name}`)
}

function printBookingHistory(customer) {
//    if(customer.bookings == null)
//         return console.log(`${customer.name} has no bookings yet.`)

    //bookings gelmiyor
 }

 module.exports = printBookingHistory