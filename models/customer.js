const Booking = require('../models/booking')
const uuid = require('uuid')

class Customer{
    constructor(id = uuid.v4(), name, bookings = []){
        this.id = id
        this.name = name
        this.bookings = bookings
    }
    book(FitnessCenter){
        const booking = new Booking(this, FitnessCenter)
        
        this.bookings.push(booking)
        return booking
        
    }
    
    static create({id, name, bookings}) {
        
        return new Customer(id, name, bookings)
        
    }
}

module.exports = Customer