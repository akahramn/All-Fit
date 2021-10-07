const customerService = require('../services/customer-service')

const router = require('express').Router()

//Show customers page
router.get('/', async (req, res) => {
    const customers = await customerService.load()
    res.send( customers )
})

router.get('/young-customers', async (req, res)=>{
    const customers = await customerService.findYoungCustomers()
    res.render('customers', { customers })
})

//Show cutomer page
router.get('/:customerId', async (req, res) => { 
    const customer = await customerService.find(req.params.customerId)
    res.render('customer', {customer})
} )

//Add new Customer
router.post('/', async (req, res) => {
    const customer = await customerService.insert(req.body)
    res.send(customer)
})

//Add new booking
router.post('/:customerId/bookings', async(req, res) => {
    const booking = await customerService.book(req.params.customerId, req.body.fitnessCenterId)
    res.send(booking)
})

//Delete
router.delete('/:customersId', async (req, res) => {
    await customerService.remove(req.params.customersId)
    res.send('OK')
})


module.exports = router