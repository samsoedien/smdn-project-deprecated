import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../../store/store'
import PostList from './PostList'

export interface IPostsProps {}

const Posts: React.FC<IPostsProps> = () => {
  const posts = useSelector((state: RootState) => state.posts.posts)
  // const dispatch = useDispatch()

  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

Posts.propTypes = {}

export default Posts
