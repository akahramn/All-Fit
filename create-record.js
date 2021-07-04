const Customer = require('./models/customer')
const FitnessCenter = require('./models/fitnessCenter')

const customerDatabase = require('./database/customer-database')
const fitnessCenterDatabase = require('./database/fitnessCenter-database')

const printBookingHistory = require('./lib/print-booking-history')

const abdullah = Customer.create({name:'Abdullah'})
const cemre = Customer.create({name:'Cemre'})

const asfit = FitnessCenter.create({name:'AS-FIT', location:'Duzce',point:'4'})
const mcfit = FitnessCenter.create({name:'MCFIT', location:'Istanbul', point:'8.5'})
abdullah.book(mcfit)

customerDatabase.save([abdullah, cemre])
fitnessCenterDatabase.save([mcfit, asfit])

//const customers = customerDatabase.load()

//customers.forEach(printBookingHistory)


