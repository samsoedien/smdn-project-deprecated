import mongoose from 'mongoose'

import { IPost } from '@smdn-project/shared'

const PostSchema = new mongoose.Schema<IPost>({
  // id: {
  //   type: String,
  //   required: true,
  // },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: {
    text: {
      type: String,
    },
  },
})

const PostModel = mongoose.model('Post', PostSchema)

export default PostModel
