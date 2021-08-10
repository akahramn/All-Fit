const express = require('express')
const bodyParser = require('body-parser')

require('./mongo-connection')

const indexRouter = require('./routes/index')
const customersRouter = require('./routes/cutomers')
const fitnessCentersRouter = require('./routes/fitnessCenters')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.set('view engine', 'pug')


app.use('/', indexRouter)
app.use('/customers', customersRouter)
app.use('/fitnessCenters', fitnessCentersRouter)


app.listen(port, () => {
    console.log(`Port ${port} started listening`)
})