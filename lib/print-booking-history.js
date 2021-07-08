
function printBooking(booking){
    console.log(`${booking.Customer.name} was sport in ${booking.FitnessCenter.name}`)
    
}

function printBookingHistory(customer) {
   if(customer.bookings == null)
        return console.log(`${customer.name} has no bookings yet.`)
    
        let bookings = customer.bookings;
    
    bookings.forEach(printBooking);  
    
 }

 module.exports = printBookingHistory