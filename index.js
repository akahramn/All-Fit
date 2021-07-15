const express = require('express')
const customerDatabase = require('./database/customer-database')
const flatted = require('flatted')
const bodyParser = require('body-parser')
const axios = require('axios');

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

app.post('/customers', async (req, res) => {
    
    await customerDatabase.insert(req.body)

    res.send(customer)
})

app.delete('/customers/:customersId', async (req, res) => {
    await customerDatabase.removeBy('id', req.params.customersId)
    res.send('OK')
})

app.get('/customers/:customerId', async (req, res) => {
    const customer = await customerDatabase.findBy('id', req.params.customerId)
    console.log(customer)
    res.render('customer', {customer})
} )

app.listen(port, () => {
    console.log(`Port ${port} started listening`)
})