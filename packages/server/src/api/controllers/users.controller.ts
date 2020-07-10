import { RequestHandler } from 'express'

// import UserModel, { UserDocument } from '../models/User.model';
const UserModel = require('../models/User.model')

export const getUsers: RequestHandler = async (req, res: any, next) => {
  try {
    return res.status(200).json(res.advancedQuery)
  } catch (err) {
    return next(err)
  }
}

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id)
    return res.status(200).json({ success: true, data: user })
  } catch (err) {
    return next(err)
  }
}

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.create(req.body)
    return res.status(201).json({ success: true, data: user })
  } catch (err) {
    return next(err)
  }
}

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    return res.status(200).json({ success: true, data: user })
  } catch (err) {
    return next(err)
  }
}

export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id)

    return res.status(200).json({ success: true, data: {} })
  } catch (err) {
    return next(err)
  }
}
