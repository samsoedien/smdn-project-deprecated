const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'please add a title'],
    maxlength: 100,
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
})

ReviewSchema.index({ product: 1, user: 1 }, { unique: true })

const ReviewModel = mongoose.model('Review', ReviewSchema)

module.exports = ReviewModel
