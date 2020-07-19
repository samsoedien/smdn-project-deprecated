import React, { useState, FormEvent, ChangeEvent } from 'react'
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { createPostThunkActionCreator } from '../../../../store/posts/postsSlice'

export interface IPostForm {}

const PostForm: React.FC<IPostForm> = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputValue)
    const postData = {
      author: 'author',
      body: inputValue,
    }
    dispatch(createPostThunkActionCreator(postData))
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={inputValue} onChange={(e) => handleOnChange(e)} className="form-control" />
      <button className="btn btn-secondary">Post</button>
    </form>
  )
}

PostForm.propTypes = {}

export default PostForm
