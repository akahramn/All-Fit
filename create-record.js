const Customer = require('./models/customer')
const FitnessCenter = require('./models/fitnessCenter')

const customerService = require('./service/customer-service')
const fitnessCenterService = require('./service/fitnessCenter-service')

const printBookingHistory = require('./lib/print-booking-history')
const printFitnessCenterHistory = require('./lib/fitnessCenterRateHistory')

const { insert } = require('./service/customer-service')


const abdullah = Customer.create({name:'Abdullah', phoneNum:'5523761876', mail:'a.kahramnn@gmail.com'})
const cemre = Customer.create({name:'Cemre', phoneNum:'1233211232', mail:'cemre3454@gmail.com'})

const asfit = FitnessCenter.create({name:'AS-FIT', location:'Duzce', phoneNum:'03212344334'})
const mcfit = FitnessCenter.create({name:'MCFIT', location:'Istanbul', phoneNum:'02368289829'})
const powergym = FitnessCenter.create({name:'POWER-GYM', location:'Ankara', phoneNum:'02123213221'})
const atlasgym = FitnessCenter.create({name:'ATLAS-GYM', location:'Eskisehir', phoneNum:'04323413221'})
const powerzone = FitnessCenter.create({name:'POWER-ZONE', location:'Izmir', phoneNum:'08834732345'})
const ironside = FitnessCenter.create({name:'IRONSIDE', location:'Istanbul', phoneNum:'02133212323'})

abdullah.book(mcfit)
// abdullah.book(asfit)
// abdullah.book(powergym)
// cemre.book(asfit)
// cemre.book(powerzone)
// cemre.book(ironside)

// abdullah.rate(mcfit,4,'Sports equipments is too old'),
// cemre.rate(mcfit,5,'Trainers do not help')
// abdullah.rate(mcfit,8,'There is very good fitness center')
// cemre.rate(powerzone,7,'I advise everyone')


// async function main(){
//    try {
//     await customerService.save([abdullah, cemre])
//     await fitnessCenterService.save([mcfit, asfit, powergym, atlasgym, powerzone, ironside])  
    

//    } catch (e) {
//        return console.log(e);

    
//    }
// }
// main()

printBookingHistory(abdullah)

//const customers = customerService.load()

//customers.forEach(printBookingHistory)


