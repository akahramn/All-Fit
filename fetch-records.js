const database = require('./database/base-database')
const customerDatabase = require('./database/customer-database')
const fitnessCenterDatabase = require('./database/fitnessCenter-database')
const create = require('./create-record')

const fitnessCenterRateHistory = require('./lib/fitnessCenterRateHistory')

const Customer = require('./models/customer')
const FitnessCenter = require('./models/fitnessCenter')


const printBookingHistory = require('./lib/print-booking-history')




async function main(){
    const abdullah = await customerDatabase.findBy('name', 'Abdullah')
    const mcfit = await fitnessCenterDatabase.findBy('name', 'MCFIT')

    fitnessCenterRateHistory(mcfit)
    printBookingHistory(abdullah)
}
main()












