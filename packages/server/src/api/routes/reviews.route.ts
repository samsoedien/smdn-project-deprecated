import express, { Router, RouterOptions } from 'express'

import * as reviewController from '../controllers/reviews.controller'
import { protectRoutes, authorizeUser } from '../middleware/auth.middelware'
import advancedQueryMiddleware from '../middleware/query.middelware'

const ReviewModel = require('../models/Review.model')

const options: RouterOptions = {
  mergeParams: true,
}

const router = Router(options)

router.get(
  '/',
  advancedQueryMiddleware(ReviewModel, {
    path: 'product',
    select: 'name description',
  }),
  reviewController.getReviews,
)

router.get('/:id', reviewController.getReview)

router.post('/', [protectRoutes, authorizeUser('admin', 'user')], reviewController.postReview)

router.put('/:id', [protectRoutes, authorizeUser('admin', 'user')], reviewController.updateReview)

router.delete('/:id', [protectRoutes, authorizeUser('admin', 'user')], reviewController.deleteReview)

export default router
