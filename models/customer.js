const Booking = require('../models/booking')
const uuid = require('uuid')
const Rating = require('./rating')


class Customer{
    constructor(id = uuid.v4(), name, phoneNum, mail, bookings = []){
        this.id = id
        this.name = name
        this.phoneNum = phoneNum
        this.mail = mail
        this.bookings = bookings
    }
    book(FitnessCenter){
        const booking = new Booking(this, FitnessCenter)
        
        this.bookings.push(booking)
        return booking
        
    }

    rate(fitnessCenter, point, comment) {
        const ratings = new Rating(this, fitnessCenter, point, comment)
        fitnessCenter.ratings.push(ratings)
    }
    
    static create({id, name, phoneNum, mail, bookings}) {
        
        return new Customer(id, name, phoneNum, mail, bookings)
        
    }
}

module.exports = Customer