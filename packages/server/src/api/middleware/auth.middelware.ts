import { Request, Response, NextFunction, RequestHandler } from 'express'
import jwt from 'jsonwebtoken'

const ErrorResponse = require('../../utils/errorResponse')

const User = require('../models/User.model')

export interface IUserRequest extends Request {
  user: any
}

export const protectRoutes: RequestHandler = async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // eslint-disable-next-line prefer-destructuring
    token = req.headers.authorization.split(' ')[1]
  } else if (req.cookies.token) token = req.cookies.token

  if (!token) return next(new ErrorResponse('Not authorized to access this route', 401))

  try {
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);

    // req.user = await User.findById(decoded.id);
    return next()
  } catch (err) {
    return next(err)
  }
}

export const authorizeUser = (...roles: any[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorResponse(`User role ${req.user.role} is not authorized to access this route`, 403))
    }
    return next()
  }
}
