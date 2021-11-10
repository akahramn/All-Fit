const customer = require('../models/customer')
const customerService = require('../services/customer-service')
const bcrypt = require('bcrypt')
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
    res.send(customer)
} )

router.get('/login', async (req, res) => {
    //if(await customerService.findBy(password, req.body.password) && customerService.findBy(username, req.body.username)){
    //    alert('HEELLLOOOOOOO')
    //    res.send()
    //}
    const passWor = await customerService.findBy(passWord, req.body.passWord)
    console.log(passWor)
    res.send(passWor)
    
})


//Add new Customer
router.post('/register', async (req, res) => {
    req.body.passWord = await bcrypt.hash(req.body.passWord, 10, (err, hash) => {
      if(err) {
            res.status(500).json({
                error: err 
            })
        }else {
            console.log('PASSWORD =', hash)
            return hash
        }
    })

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