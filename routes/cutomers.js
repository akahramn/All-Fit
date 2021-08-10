const customerDatabase = require('../database/customer-database')
const fitnessCenterDatabase = require('../database/fitnessCenter-database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const customers = await customerDatabase.load()
    
    res.render('customers', { customers })
})

router.get('/:customerId', async (req, res) => {
    const customer = await customerDatabase.findBy('id', req.params.customerId)
    
    res.render('customer', {customer})
} )

//Add new Customer
router.post('/', async (req, res) => {
    
    await customerDatabase.insert(req.body)

    res.send(customer)
})

//Add new booking
router.post('/:customerId/bookings', async(req, res) => {
    const customer = await customerDatabase.findBy('id', req.params.customerId)
    const fitnessCenter = await fitnessCenterDatabase.findBy('id', req.body.fitnessCenterId)

    customer.book(fitnessCenter)
    console.log(customer)

    await customerDatabase.update(customer)

    res.send(flatted.stringify(customer))

})

router.post('/:customerId/rate', async(req, res) => {
    const customer = await customerDatabase.findBy('id', req.params.customerId)
    const fitnessCenter = await fitnessCenterDatabase.findBy('id', req.body.fitnessCenterId)
    const point = req.body.point
    const comment = req.body.comment

    customer.rate(fitnessCenter, point, comment)

    await fitnessCenterDatabase.update(fitnessCenter)
    res.send(flatted.stringify(fitnessCenter))
})

router.delete('/:customersId', async (req, res) => {
    await customerDatabase.removeBy('id', req.params.customersId)
    res.send('OK')
})

module.exports = router