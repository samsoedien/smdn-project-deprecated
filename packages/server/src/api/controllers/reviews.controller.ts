import { RequestHandler } from 'express'

const ProductModel = require('../models/Product.model')
const ReviewModel = require('../models/Review.model')

export const getReviews: RequestHandler = async (req, res: any, next) => {
  try {
    if (req.params.productId) {
      const reviews = await ReviewModel.find({ product: req.params.productId })

      return res.status(200).json({ success: true, count: reviews.length, data: reviews })
    }
    return res.status(200).json(res.advancedQuery)
  } catch (err) {
    return next(err)
  }
}

export const getReview: RequestHandler = async (req, res, next) => {
  try {
    const review = await ReviewModel.findById(req.params.id)

    return res.status(200).json({ success: true, data: review })
  } catch (err) {
    return next(err)
  }
}

export const postReview: RequestHandler = async (req: any, res, next) => {
  try {
    req.body.product = req.params.productId
    req.body.user = req.user.id
    const product = await ProductModel.findById(req.params.productId)

    if (!product) return res.status(422).json({ msg: "product doesn't exists" })

    const review = await ReviewModel.create(req.body)

    return res.status(201).json({ success: true, data: review })
  } catch (err) {
    return next(err)
  }
}

export const updateReview: RequestHandler = async (req: any, res, next) => {
  try {
    let review = await ReviewModel.findById(req.params.id)

    if (!review) return res.status(422).json({ msg: 'review doesnt exists' })

    if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ msg: 'Not authorized' })
    }

    review = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    return res.status(201).json({ success: true, data: review })
  } catch (err) {
    return next(err)
  }
}

export const deleteReview: RequestHandler = async (req: any, res, next) => {
  try {
    const review = await ReviewModel.findById(req.params.id)

    if (!review) return res.status(422).json({ msdg: 'There is no review found' })

    if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ msg: 'Not authorized' })
    }

    await review.remove()

    return res.status(200).json({ success: true, data: {} })
  } catch (err) {
    return next(err)
  }
}
