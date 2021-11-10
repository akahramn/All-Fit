const bookingService = require('../services/booking-service')
const router = require('express').Router()

//Show customers page
router.get('/', async (req, res) => {
    const bookings = await bookingService.load()

    res.render('bookings', { bookings })
})

//Search with query
router.get('/search', async (req, res) => {
    res.render('bookings', { bookings })
})

module.exports = router