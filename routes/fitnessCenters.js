const fitnessCenterService = require('../services/fitnessCenter-service')
const ratingService = require('../services/rating-service')
const router = require('express').Router()

router.get('/', async (req, res) => {
    const fitnessCenters = await fitnessCenterService.load()
    res.render('fitnessCenters', { fitnessCenters })
})

//Rate
router.post('/:fitnessCenterId/rate', async (req, res) => {
    const { customerId, comment, point } = req.body
    const fitnessCenterId = req.params.fitnessCenterId

    const rating = ratingService.rate(customerId, fitnessCenterId, point, comment)
    res.send(rating)
})

router.get('/:fitnessCenterId', async (req, res) => {
    const fitnessCenter = await fitnessCenterService.find(req.params.fitnessCenterId)
    res.render('fitnessCenter', { fitnessCenter })
})



router.post('/', async (req, res, next) => {
    try {
        const fitnessCenter = await fitnessCenterService.insert(req.body)
        res.send(fitnessCenter)
    } catch (error) {
        next(error)
    }
})

router.delete('/:fitnessCenterId', async (req, res) => {
    await fitnessCenterService.remove(req.params.fitnessCenterId)
    res.send("OK")
})

module.exports = router