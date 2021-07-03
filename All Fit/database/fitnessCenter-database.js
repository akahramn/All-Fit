const BaseDatabase = require('./base-database')
const FitnessCenter = require('../models/fitnessCenter')


class FitnessCenterDatabase extends BaseDatabase{
    fimdByFitnessCenterName(name){
        return this.findby('name', name)
    }

    findByLocation(location) {
        return this.findby('location', location)
    }
}

module.exports = new FitnessCenterDatabase(FitnessCenter)