import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import todosReducer from './reducers/todoSlice'

import products from './products/products'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    products,
  },
})
