const database = require('./database/base-database')
const customerDatabase = require('./database/customer-database')
const fitnessCenterDatabase = require('./database/fitnessCenter-database')
const create = require('./create-record')

const fitnessCenterRateHistory = require('./lib/fitnessCenterRateHistory')

const Customer = require('./models/customer')
const FitnessCenter = require('./models/fitnessCenter')

<<<<<<< HEAD
const printBookingHistory = require('./lib/print-booking-history')


async function main(){
    const abdullah = await customerDatabase.findBy('name', 'Abdullah')
    const mcfit = await fitnessCenterDatabase.findBy('name', 'MCFIT')

    fitnessCenterRateHistory(mcfit)
    printBookingHistory(abdullah)
}
main()
=======
const printbookinghistory = require('./lib/print-booking-history')
>>>>>>> 808ef6a2cbd6035194268d9858e6a86edf484ff4




<<<<<<< HEAD



=======
const abdullah = customerDatabase.findBy('name', 'Abdullah')



printbookinghistory(abdullah)
>>>>>>> 808ef6a2cbd6035194268d9858e6a86edf484ff4





