import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../../store/store'
import { fetchPostsThunkActionCreator } from '../../../store/posts/postsSlice'
import PostList from './PostList'
import PostForm from './PostForm'

export interface IPostsProps {}

const Posts: React.FC<IPostsProps> = () => {
  const posts = useSelector((state: RootState) => state.posts.entities)
  const dispatch = useDispatch()

  console.log('posts', posts)

  return (
    <div>
      <button className="btn btn-primary" onClick={() => dispatch(fetchPostsThunkActionCreator())}>
        Fetch Posts
      </button>
      <PostForm />
      <PostList posts={posts} />
    </div>
  )
}

Posts.propTypes = {}

export default Posts
