const customer = require('../models/customer')
const customerService = require('../services/customer-service')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = require('express').Router()

//Show customers page
router.get('/', async (req, res) => {
    const customers = await customerService.load()
    res.send(customers)
})

router.get('/young-customers', async (req, res) => {
    const customers = await customerService.findYoungCustomers()
    res.render('customers', { customers })
})

//Show cutomer page
router.get('/:customerId', async (req, res) => {
    const customer = await customerService.find(req.params.customerId)
    res.send(customer)
})

router.post('/login', async (req, res) => {
    await customerService.findBy("mail", req.body.mail).then((customer) => {
        if (customer.lenght < 1) {
            console.log("Auth Failed")
            return res.status(401).json({
                message: "Mail failed"
            })
        }

        bcrypt.compare(req.body.passWord, customer[0].passWord, (err, result) => {
            if (err) {
                console.log("Auth Failed")
                return res.status(401).json({
                    message: "Password failed"
                })
            }
            if (result) {
                const token = jwt.sign({email: customer[0].mail, id: customer[0]._id}, 'secret', {expiresIn: "1h"})
                console.log("Auth Successful")
                console.log(token)
                return res.status(200).json({
                    message: "Auth successful",
                    token: token
                })
            }
        })
    })
})






//Add new Customer
router.post('/register', async (req, res) => {
    req.body.passWord = await bcrypt.hash(req.body.passWord, 10).then((hash) => {
        return hash
    })
    const customer = await customerService.insert(req.body)
    res.send(customer)
})

//Add new booking
router.post('/:customerId/bookings', async (req, res) => {
    const booking = await customerService.book(req.params.customerId, req.body.fitnessCenterId)
    res.send(booking)
})

//Delete
router.delete('/:customersId', async (req, res) => {
    await customerService.remove(req.params.customersId)
    res.send('OK')
})


module.exports = router