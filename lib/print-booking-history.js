
function printBooking(booking){
    console.log(`${booking.Customer.name} was sport in ${booking.FitnessCenter.name}`)
<<<<<<< HEAD
    
}

function printBookingHistory(customer) {
   if(customer.bookings == null)
        return console.log(`${customer.name} has no bookings yet.`)
    
        let bookings = customer.bookings;
    
    bookings.forEach(printBooking);  
    
=======
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
>>>>>>> 808ef6a2cbd6035194268d9858e6a86edf484ff4
 }

 module.exports = printBookingHistory