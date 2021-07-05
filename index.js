const database = require('./database/base-database')
const customerDatabase = require('./database/customer-database')
const fitnessCenterDatabase = require('./database/fitnessCenter-database')
const create = require('./create-record')

const fitnessCenterRateHistory = require('./lib/fitnessCenterRateHistory')

const Customer = require('./models/customer')
const FitnessCenter = require('./models/fitnessCenter')

const printbookinghistory = require('./lib/print-booking-history')


// const abdullah = customerDatabase.findByName('Abdullah')
// const cemre = customerDatabase.findByName('Cemre')
// // const mcfit = fitnessCenterDatabase.findByFitnessCenterName('MCFIT')
const mcfit = fitnessCenterDatabase.findBy('name', 'MCFIT')

fitnessCenterRateHistory(mcfit)



// printbookinghistory(abdullah)
// printbookinghistory(cemre)




