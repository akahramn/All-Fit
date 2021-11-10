const BaseService = require('./base-service')
const Rating = require('../models/rating')
const customerService = require('./customer-service')
const fitnessCenterService = require('./fitnessCenter-service')

class RatingService extends BaseService {


    async findByName(name) {
        return this.findBy('name', name)
    }

    async rate(customerId, fitnessCenterId, point, comment) {

        const FitnessCenter = await fitnessCenterService.find(fitnessCenterId)
        const Customer = await customerService.find(customerId)

        const rating = await this.insert({ Customer, FitnessCenter, point, comment })
        FitnessCenter.ratings.push(rating)

        await FitnessCenter.save()
        console.log("RATİNG = ", rating)
        return rating
    }
}

module.exports = new RatingService(Rating)