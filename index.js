const database = require('./database/base-database')
const customerdatabase = require('./database/customer-database')
const fitnessCenterDatabase = require('./database/fitnessCenter-database')
const printbookinghistory = require('./lib/print-booking-history')

const Customer = require('./models/customer')
const FitnessCenter = require('./models/fitnessCenter')

const abdullah = new Customer(undefined, 'Abdullah')
const ahmet = new Customer(undefined, 'ahmet')
const kadir = new Customer(undefined, 'kadir')
const onur = new Customer(undefined, 'onur')

const asFit = new FitnessCenter('asFit', 'duzce', 9)
const mcFit = new FitnessCenter('mcFit', 'ankara', 10)

abdullah.book(asFit)
abdullah.book(mcFit)
ahmet.book(asFit)
kadir.book(mcFit)
onur.book(asFit)

// customerdatabase.save([abdullah, ahmet, kadir, onur])
// fitnessCenterDatabase.save([asFit,mcFit])


 let a = customerdatabase.load()
 


//db.insert('customers', kadir)
//db.insert('customers', ahmet)
//db.insert('customers', onur)
//db.remove('customers', 3)
  //const customers = db.load('customers')
  //const a = db.findByName('customers', 'abdullah')

//console.log(a.bookings)


// customers.forEach(c => console.log(c.name))
