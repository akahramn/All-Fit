const Customer = require('./customer')
const FitnessCenter = require('./fitnessCenter')

const abdullah = new Customer('abdullah')
const asFit = new FitnessCenter('asFit', 'duzce', 9)
const mcFit = new FitnessCenter('mcFit', 'ankara', 10)

abdullah.book(asFit)
abdullah.book(mcFit)

function printBooking(booking){
    console.log(`${booking.Customer.name} was sport in ${booking.FitnessCenter.name}`)
}

function printBookingHistory(Customer) {
    Customer.bookings.forEach(printBooking)
  }

printBookingHistory(abdullah)
