const fitnessCenterDatabase = require('../database/fitnessCenter-database')

const router = require('express').Router()


router.get('/', async(req, res) => {
    const fitnessCenters = await fitnessCenterDatabase.load()
    
    res.render('fitnessCenters', { fitnessCenters })
})

router.get('/:fitnessCenterId', async(req, res) => {
    const fitnessCenter = await fitnessCenterDatabase.findBy('id', req.params.fitnessCenterId)

    res.render('fitnessCenter', { fitnessCenter })
})


module.exports = router