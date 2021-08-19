const mongoose = require('mongoose')

const FitnessCenterSchema = new mongoose.Schema({
    name: String,
    phoneNum: Number,
    location: String,
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating',
        autopopulate: { maxDepth: 2 }
    }]
})

FitnessCenterSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('FitnessCenter', FitnessCenterSchema);
