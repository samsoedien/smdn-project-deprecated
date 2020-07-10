import { Router } from 'express'

import { protectRoutes, authorizeUser } from '../middleware/auth.middelware'

import reviewRoutes from './reviews.route'
import * as productController from '../controllers/products.controller'
import advancedQuery from '../middleware/query.middelware'

const ProductModel = require('../models/Product.model')
// const productValidation = require('../validation/products');

const router = Router()

router.use('/:productId/reviews', reviewRoutes)

router.get('/', advancedQuery(ProductModel, 'reviews'), productController.getProducts)

router.get('/:id', productController.getProduct)

router.post('/', [protectRoutes, authorizeUser('admin', 'publisher')], productController.postProduct)

router.put('/:id', [protectRoutes, authorizeUser('admin', 'publisher')], productController.updateProduct)

router.delete('/:id', [protectRoutes, authorizeUser('admin', 'publisher')], productController.deleteProduct)

router.get('/radius/:zipcode/:distance', productController.getProductsInradius)

export default router
