const database = require('./database/base-database')
const customerDatabase = require('./database/customer-database')
const fitnessCenterDatabase = require('./database/fitnessCenter-database')
// const create = require('./create-record')

const Customer = require('./models/customer')
const FitnessCenter = require('./models/fitnessCenter')

const printbookinghistory = require('./lib/print-booking-history')


const abdullah = customerDatabase.findByName('Abdullah')


console.log(abdullah)
printbookinghistory(abdullah)




