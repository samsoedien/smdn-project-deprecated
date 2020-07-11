import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { create, edit, remove, toggleComplete } from '../../../store/reducers/todoSlice'

export interface ITodoProps {}

const Todo: React.FC<ITodoProps> = (props) => {
  const [inputText, setInputText] = useState('')
  const [editText, setEditText] = useState('')
  const [isEditingTodo, setIsEditingTodo] = useState(-1)
  const dispatch = useDispatch()
  const todos = useSelector((state: any) => state.todos)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    dispatch(create(inputText))

    setInputText('')
  }

  const handleDelete = (id: any) => () => {
    dispatch(remove(id))
  }

  const handleToggle = (id: any) => () => {
    dispatch(toggleComplete(id))
  }

  const handleEdit = (id: any, description: any) => () => {
    setIsEditingTodo(id)
    setEditText(description)
  }

  const handleUpdate = (e: any) => {
    e.preventDefault()
    dispatch(edit({ id: isEditingTodo, description: editText }))

    setIsEditingTodo(-1)
    setEditText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button type="submit">Create New</button>
      </form>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          {isEditingTodo === todo.id ? (
            <form onSubmit={handleUpdate}>
              <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
              <button type="submit">Update</button>
            </form>
          ) : (
            <>
              {todo.description}
              {todo.isComplete ? 'Done' : ''}
              <button onClick={handleDelete(todo.id)}>Delete</button>
              <button onClick={handleToggle(todo.id)}>Toggle</button>
              <button onClick={handleEdit(todo.id, todo.description)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

Todo.propTypes = {}

export default Todo
