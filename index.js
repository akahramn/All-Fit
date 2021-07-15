const express = require('express')
const customerDatabase = require('./database/customer-database')
const flatted = require('flatted')


const app = express()
const port = 3000

app.get('/',(req, res) =>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/customers', async (req, res) => {
    const customers = await customerDatabase.load()
    res.send(flatted.stringify(customers))
})

app.listen(port, () => {
    console.log(`Port ${port} started listening`)
})