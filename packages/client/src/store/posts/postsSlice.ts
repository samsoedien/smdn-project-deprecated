import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '@smdn-project/common'
import axios from 'axios'

interface IPostState {
  entities: IPost[]
  isLoading: boolean
  errors: any
}

const postsInitialState: IPostState = {
  entities: [
    // {
    //   id: '1',
    //   author: 'samsoedien',
    //   body: 'Hello world, this is a post',
    //   date: new Date(),
    //   comments: [],
    // },
    // {
    //   id: '2',
    //   author: 'samsoedien',
    //   body: 'Another post',
    //   date: new Date(),
    //   comments: [],
    // },
  ],
  isLoading: false,
  errors: {},
}

// const postsAdapter = createEntityAdapter<IPost>({
//   selectId: (post) => post.id,
//   sortComparer: (a, b) => a.body.localeCompare(b.body),
// })

export const fetchPostsThunkActionCreator = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
  const response = await axios.get('/api/v1/posts')
  console.log('data', response.data)
  return response.data
})

export const createPostThunkActionCreator = createAsyncThunk(
  'posts/createPost',
  async (postData: Partial<IPost>, thunkAPI) => {
    const response = await axios.post('/api/v1/posts', postData)
    return response.data
  },
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  // initialState: postsAdapter.getInitialState(),
  reducers: {
    create: (state, action: PayloadAction<IPost>) => {
      state.entities.push(action.payload)
    },
  },
  extraReducers: {
    [fetchPostsThunkActionCreator.pending as any]: (state, action: PayloadAction<IPost>) => {
      state.isLoading = true
    },
    [fetchPostsThunkActionCreator.fulfilled as any]: (state, action: PayloadAction<IPost>) => {
      state.entities.push(action.payload)
      state.isLoading = false
    },
    [fetchPostsThunkActionCreator.rejected as any]: (state, action: PayloadAction<IPost>) => {
      state.isLoading = false
      state.errors = { message: 'Error' }
    },
    [createPostThunkActionCreator.fulfilled as any]: (state, action: PayloadAction<IPost>) => {
      state.entities.push(action.payload)
    },
  },
})

// const listAdapter = createEntityAdapter({})
// export const listSelectors = listAdapter.getSelectors((state) => state.list.data)

export const { create: createPostActionCreator } = postsSlice.actions

export default postsSlice.reducer
