import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import todosReducer from './reducers/todoSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
})
