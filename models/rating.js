const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    Customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        autopopulate: { maxDepth: 1 }
    },
    FitnessCenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FitnessCenter",
        autopopulate: { maxDepth: 1 }
    },
    point: Number,
    comment: String
})

RatingSchema.plugin(require("mongoose-autopopulate"))
module.exports = mongoose.model('Rating', RatingSchema);
