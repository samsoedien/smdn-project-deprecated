import { RequestHandler, Request } from 'express'

// const { validationResult } = require('express-validator');
const geocoder = require('../../utils/geocoder')

const ProductModel = require('../models/Product.model')

interface IRequestUser extends Request {
  user?: any
}

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
export const getProducts: RequestHandler = async (req, res: any, next) => {
  try {
    // const products = await ProductModel.find();

    return res.status(200).json(res.advancedQuery)
  } catch (err) {
    return next(err)
  }
}

// @desc    Get product by ID
// @route   GET /api/v1/products/:id
// @access  Public
export const getProduct: RequestHandler = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id)

    if (!product) return res.status(400).json({ success: false })

    return res.status(200).json({ success: true, data: product })
  } catch (err) {
    return next(err)
  }
}

// @desc    Post a product
// @route   POST /api/v1/products
// @access  Private
export const postProduct: RequestHandler = async (req: IRequestUser, res, next) => {
  try {
    req.body.user = req.user.id

    const publishedProduct = await ProductModel.findOne({ user: req.user.id })
    if (publishedProduct && req.user.role !== 'admin')
      return res.status(400).json({ error: 'This user has already published a product' })

    const product = await ProductModel.create(req.body)

    return res.status(201).json({ success: true, data: product })
  } catch (err) {
    return next(err)
  }
}

// @desc    Update product by ID
// @route   PUT /api/v1/products/:id
// @access  Private
export const updateProduct: RequestHandler = async (req: IRequestUser, res, next) => {
  try {
    let product = await ProductModel.findById(req.params.id)

    if (!product) return res.status(400).json({ success: false })

    if (product.user.toString() !== req.user.id && req.user.role !== 'admin')
      return res.status(401).json({ error: 'Not authorized to update this product' })

    product = await ProductModel.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    return res.status(200).json({ success: true, data: product })
  } catch (err) {
    return next(err)
  }
}

// @desc    Delete product by ID
// @route   DELETE /api/v1/products
// @access  Private
export const deleteProduct: RequestHandler = async (req: IRequestUser, res, next) => {
  try {
    let product = await ProductModel.findById(req.params.id)

    if (!product) return res.status(400).json({ success: false })

    if (product.user.toString() !== req.user.id && req.user.role !== 'admin')
      return res.status(401).json({ error: 'Not authorized to delete this product' })

    product = await ProductModel.remove()

    return res.status(200).json({ success: true, data: {} })
  } catch (err) {
    return next(err)
  }
}

// @desc    Get products within a radius
// @route   GET /api/v1/products/radius/:zipcode/:distance
// @access  Public
export const getProductsInradius: RequestHandler = async (req: any, res, next) => {
  try {
    const { zipcode, distance } = req.params

    const loc = await geocoder.geocode(zipcode)
    const lat = loc[0].latitude
    const lng = loc[0].longitude

    // Calc product radius by dividing distance by earth radius (6.378 km)
    const radius = distance / 6378

    const products = await ProductModel.find({
      location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
    })

    return res.status(200).json({ success: true, count: products.length, data: products })
  } catch (err) {
    return next(err)
  }
}
