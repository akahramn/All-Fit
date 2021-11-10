const service = require('./service/base-service')
const customerService = require('./service/customer-service')
const fitnessCenterService = require('./service/fitnessCenter-service')
const create = require('./create-record')

const fitnessCenterRateHistory = require('./lib/fitnessCenterRateHistory')

const Customer = require('./models/customer')
const FitnessCenter = require('./models/fitnessCenter')


const printBookingHistory = require('./lib/print-booking-history')




async function main(){
    const abdullah = await customerService.findBy('name', 'Abdullah')
    const mcfit = await fitnessCenterService.findBy('name', 'MCFIT')

    fitnessCenterRateHistory(mcfit)
    printBookingHistory(abdullah)
}
main()












