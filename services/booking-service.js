const BaseService = require('./base-service')
const Booking = require('../models/booking')

class BookingService extends BaseService {
    async findByName(name) {
        return this.findBy('name', name)
    }
}

module.exports = new BookingService(Booking)