const express = require('express')
const customerDatabase = require('./database/customer-database')
const fitnessCenterDatabase =  require('./database/fitnessCenter-database')
const flatted = require('flatted')
const bodyParser = require('body-parser')
const axios = require('axios');
const FitnessCenter = require('./models/fitnessCenter')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.set('view engine', 'pug')

app.get('/',(req, res) =>{
    res.render('layout')
})

app.get('/customers', async (req, res) => {
    const customers = await customerDatabase.load()
    
    res.render('customers', { customers })
})

app.get('/customers/:customerId', async (req, res) => {
    const customer = await customerDatabase.findBy('id', req.params.customerId)
    
    res.render('customer', {customer})
} )

app.get('/fitnessCenters', async(req, res) => {
    const fitnessCenters = await fitnessCenterDatabase.load()
    
    res.render('fitnessCenters', { fitnessCenters })
})

app.get('/fitnessCenters/:fitnessCenterId', async(req, res) => {
    const fitnessCenter = await fitnessCenterDatabase.findBy('id', req.params.fitnessCenterId)

    res.render('fitnessCenter', { fitnessCenter })
})

//Add new Customer
app.post('/customers', async (req, res) => {
    
    await customerDatabase.insert(req.body)

    res.send(customer)
})

//Add new booking
app.post('/customers/:customerId/bookings', async(req, res) => {
    const customer = await customerDatabase.findBy('id', req.params.customerId)
    const fitnessCenter = await fitnessCenterDatabase.findBy('id', req.body.fitnessCenterId)

    customer.book(fitnessCenter)
    console.log(customer)

    await customerDatabase.update(customer)

    res.send(flatted.stringify(customer))

})

app.delete('/customers/:customersId', async (req, res) => {
    await customerDatabase.removeBy('id', req.params.customersId)
    res.send('OK')
})



app.listen(port, () => {
    console.log(`Port ${port} started listening`)
})