import React from 'react'
import PropTypes from 'prop-types'

import { IPost } from '@smdn-project/shared'

export interface IPostListProps {
  posts: IPost[]
}

const PostList: React.FC<IPostListProps> = ({ posts }) => {
  console.log('list', posts)
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={post.id}>
          <h3>{post.author}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

PostList.propTypes = {
  posts: PropTypes.any.isRequired,
}

export default PostList
