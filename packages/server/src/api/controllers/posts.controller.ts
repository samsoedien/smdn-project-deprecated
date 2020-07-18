import { RequestHandler } from 'express'

import PostModel from '../models/Post.model'

export const getPosts: RequestHandler = async (req, res, next) => {
  try {
    const posts = await PostModel.find()
    return res.status(200).json(posts)
  } catch (err) {
    return next(err)
  }
}

export const getPostById: RequestHandler = async (req, res, next) => {
  try {
    const post = await PostModel.findById(req.params.id)

    if (!post) return res.status(400).json({ success: false })

    return res.status(200).json({ success: true, data: post })
  } catch (err) {
    return next(err)
  }
}

export const postPost: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.body)
    const post = await PostModel.create(req.body)
    return res.status(201).json({ success: true, data: post })
  } catch (err) {
    return next(err)
  }
}
