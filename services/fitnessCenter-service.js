const BaseService = require('./base-service')
const FitnessCenter = require('../models/fitnessCenter')



class FitnessCenterService extends BaseService {
    findByFitnessCenterName(name) {
        return this.findby('name', name)
    }

    findByLocation(location) {
        return this.findby('location', location)
    }


}

module.exports = new FitnessCenterService(FitnessCenter)