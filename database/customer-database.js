const BaseDatabase = require('./base-database')
const Customer = require('../models/customer')

class CustomerDatabase extends BaseDatabase{
    
<<<<<<< HEAD
   async findByName(name) {
       
        const objects = await this.load()
        
        return objects.find(o => o.name == name)
        
    }

=======
    findByName(name) {
        const objects = this.load()
        
        return objects.find(o => o.name == name)
    }
>>>>>>> 808ef6a2cbd6035194268d9858e6a86edf484ff4
}

module.exports = new CustomerDatabase(Customer)