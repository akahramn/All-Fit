const Booking = require('./booking')
const uuid = require('uuid')

class Customer{
    constructor(id = uuid.v4(), name){
        this.id = id
        this.name = name
        this.bookings = []
    }
    book(FitnessCenter){
        const booking = new Booking(this, FitnessCenter)
        
        this.bookings.push(booking)
        return booking
        
    }
    
    static create({id, name, bookings}) {
        const newCostemer = new Customer(id, name)
        newCostemer.bookings = bookings
        return newCostemer
    }
}

module.exports = Customer