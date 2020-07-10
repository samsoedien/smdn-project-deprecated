import { ErrorRequestHandler } from 'express'

const ErrorResponse = require('../../utils/errorResponse')

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let error = { ...err }

  error.message = err.message

  console.log(err.stack)

  if (err.name === 'CastError') {
    const message = `Resource not found with an id of ${err.value}`
    error = new ErrorResponse(message, 404)
  }

  if (err.name === 'MongoError' && err.code === 11000) {
    const message = 'Resource duplicate value entered'
    error = new ErrorResponse(message, 400)
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val: any) => val.message)
    error = new ErrorResponse(message, 400)
  }

  res.status(error.statusCode || 500).json({ success: false, error: error.message || 'Server Error' })
}

export default errorHandler
