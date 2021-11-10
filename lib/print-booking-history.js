function printBooking(booking) {
    console.log(`${booking.Customer.name} was sport in ${booking.FitnessCenter.name}`)
}

function printBookingHistory(customer) {
    const booking = customer.bookings[0];

    //bookings.forEach(printBooking);
    return `${booking.Customer.name} was sport in ${booking.FitnessCenter.name}`
}

module.exports = printBookingHistory
