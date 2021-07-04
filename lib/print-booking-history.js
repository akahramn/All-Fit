


function printBooking(booking){
    console.log(`${booking.Customer.name} was sport in ${booking.FitnessCenter.name}`)
}

function printBookingHistory(customer) {
//    if(customer.bookings == null)
//         return console.log(`${customer.name} has no bookings yet.`)
    const bookings = customer.bookings;
    // for (const booking of bookings) {
    //     printBooking(booking);
    // }
    bookings.forEach(printBooking);  
    //customer.bookings.foreach(printBooking)
 }

 module.exports = printBookingHistory