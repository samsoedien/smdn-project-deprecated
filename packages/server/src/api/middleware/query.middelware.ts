import { Request, Response, NextFunction, RequestHandler } from 'express'

const advancedQuery: any = (model: any, populate: string) => async (req: Request, res: any, next: NextFunction) => {
  //   let query
  //   const reqQuery = { ...req.query }
  //   const removeFields = ['select', 'sort', 'page', 'limit']
  //   removeFields.forEach((param) => delete reqQuery[param])
  //   console.log(reqQuery)
  //   let queryStr = JSON.stringify(reqQuery)
  //   queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)
  //   query = model.find(JSON.parse(queryStr))
  //   if (req.query.select) {
  //     const fields = req.query.select.split(',').join(' ')
  //     query.select(fields)
  //   }
  //   if (req.query.sort) {
  //     const sortBy = req.query.sort.split('').join(' ')
  //     query = query.sort(sortBy)
  //   } else {
  //     query = query.sort('-createdAt')
  //   }
  //   const page = parseInt(req.query.page, 10) || 1
  //   const limit = parseInt(req.query.limit, 10) || 24
  //   const startIndex = (page - 1) * limit
  //   const endIndex = page * limit
  //   const total = await model.countDocuments()
  //   query = query.skip(startIndex).limit(limit)
  //   if (populate) {
  //     query = query.populate(populate)
  //   }
  //   interface IPagination {
  //     next: {}
  //     previous: {}
  //   }
  //   const results = await query
  //   interface IPaginition {
  //     prev: any
  //     next: any
  //   }
  //   const pagination: IPaginition = {
  //     prev: 0,
  //     next: 0,
  //   }
  //   if (endIndex < total) {
  //     pagination.next = {
  //       page: page + 1,
  //       limit,
  //     }
  //   }
  //   if (startIndex > 0) {
  //     pagination.prev = {
  //       page: page - 1,
  //       limit,
  //     }
  //   }
  //   res.advancedQuery = {
  //     success: true,
  //     count: results.length,
  //     pagination,
  //     data: results,
  //   }
  //   next()
}

export default advancedQuery
