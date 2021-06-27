const Booking = require('./booking')

class Customer{
    constructor(name){
        this.name = name
        this.bookings = []
    }
    book(FitnessCenter){
        const booking = new Booking(this, FitnessCenter)
        this.bookings.push(booking)
        
    }
}

module.exports = Customer