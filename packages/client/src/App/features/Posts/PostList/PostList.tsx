import React from 'react'
import PropTypes from 'prop-types'

import { IPost } from '@smdn-project/shared'

export interface IPostListProps {
  posts: IPost[]
}

const PostList: React.FC<IPostListProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post, index) => (
        <li>{post.body}</li>
      ))}
    </ul>
  )
}

PostList.propTypes = {
  posts: PropTypes.any.isRequired,
}

export default PostList
