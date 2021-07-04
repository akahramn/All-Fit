
class FitnessCenter{
    constructor(name, location, point){
        this.name = name
        this.location = location
        this.point = point
    }

    static create({name, location, point}) {
        return new FitnessCenter(name, location, point)
      }
}

module.exports = FitnessCenter