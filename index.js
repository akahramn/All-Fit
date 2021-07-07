const database = require('./database/base-database')
const customerDatabase = require('./database/customer-database')
const fitnessCenterDatabase = require('./database/fitnessCenter-database')
const create = require('./create-record')

const fitnessCenterRateHistory = require('./lib/fitnessCenterRateHistory')

const Customer = require('./models/customer')
const FitnessCenter = require('./models/fitnessCenter')

const printbookinghistory = require('./lib/print-booking-history')




const abdullah = customerDatabase.findBy('name', 'Abdullah')



printbookinghistory(abdullah)





