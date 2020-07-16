import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import productsSlice from './products/productsSlice'

const rootReducer = combineReducers({
  products: productsSlice,
})

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof rootReducer>
