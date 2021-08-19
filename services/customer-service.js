const BaseService = require('../services/base-service')
const Customer = require('../models/customer')
const bookingService = require('../services/booking-service')
const fitnessCenterService = require('../services/fitnessCenter-service')

class CustomerService extends BaseService {

    async findByName(name) {
        return this.findBy('name', name)
    }

    async book(customerId, fitnessCenterId) {
        const Customer = await this.find(customerId)
        const FitnessCenter = await fitnessCenterService.find(fitnessCenterId)

        const booking = await bookingService.insert({ Customer, FitnessCenter })
        Customer.bookings.push(booking)

        await Customer.save()
        return booking
    }

    async findYoungCustomers() {
        return this.query({
            age: {
                $lt: 30,
                $gte: 16
            }
        })
    }
}

module.exports = new CustomerService(Customer)