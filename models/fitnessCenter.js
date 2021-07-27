const uuid = require('uuid')

class FitnessCenter{
    constructor(id = uuid.v4(), name, location, phoneNum, ratings = []){
        this.id = id
        this.name = name
        this.location = location
        this.phoneNum = phoneNum
        this.ratings = ratings
    }

    static create({id, name, location, phoneNum, ratings}) {
        return new FitnessCenter(id, name, location, phoneNum, ratings)
      }
}

module.exports = FitnessCenter