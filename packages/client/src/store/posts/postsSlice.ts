import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '@smdn-project/shared'

interface IPostState {
  posts: IPost[]
}

const postsInitialState: IPostState = {
  posts: [
    {
      id: '1',
      author: 'samsoedien',
      body: 'Hello world, this is a post',
      date: new Date(),
      comments: [],
    },
    {
      id: '2',
      author: 'samsoedien',
      body: 'Another post',
      date: new Date(),
      comments: [],
    },
  ],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    create: (state, action: PayloadAction<IPost>) => {
      state.posts.push(action.payload)
    },
  },
})

export const { create: createPostActionCreator } = postsSlice.actions

export default postsSlice.reducer
