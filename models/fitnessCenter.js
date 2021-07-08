
class FitnessCenter{
    constructor(name, location, phoneNum, ratings = []){
        this.name = name
        this.location = location
        this.phoneNum = phoneNum
        this.ratings = ratings
    }

    static create({name, location, phoneNum, ratings}) {
        return new FitnessCenter(name, location, phoneNum, ratings)
      }
}

module.exports = FitnessCenter