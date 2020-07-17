import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import productsSlice from './products/productsSlice'
import postsSlice from './posts/postsSlice'

const rootReducer = combineReducers({
  products: productsSlice,
  posts: postsSlice,
})

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof rootReducer>
