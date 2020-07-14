import React, { useState, FormEvent, ChangeEvent } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { createProductActionCreator } from '../../../../store/products/products'

export interface IProductFormProps {}

const ProductForm: React.FC<IProductFormProps> = (props) => {
  const dispatch = useDispatch()
  const [newProductInput, setNewProductInput] = useState<string>('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewProductInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!newProductInput.length) return
    dispatch(createProductActionCreator({ id: 'idstring', name: newProductInput }))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={newProductInput} onChange={(e) => handleOnChange(e)} className="form-control" />
      <button className="btn btn-primary">Submit</button>
    </form>
  )
}

ProductForm.propTypes = {}

export default ProductForm
