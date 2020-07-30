import React, { MouseEvent, useState, ChangeEvent } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { removeProductActionCreator, getProductByIdThunkActionCreator } from '../../../../store/products/productsSlice'

export interface IProductModel {
  id: string
  name: string
}

export interface IProductProps {
  product: IProductModel
}

const Product: React.FC<IProductProps> = ({ product }) => {
  const dispatch = useDispatch()
  const [isEditable, setIsEditable] = useState<boolean>(false)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('edit text field')
  }

  const handleOnEdit = (e: MouseEvent, id: string): void => {
    setIsEditable(!isEditable)
  }

  const handleOnDelete = (e: MouseEvent, id: string): void => {
    e.preventDefault()
    dispatch(removeProductActionCreator({ id, name: '' }))
  }
  return (
    <div>
      {isEditable ? (
        <input type="text" value={product.name} onChange={(e) => handleOnChange(e)} />
      ) : (
        <a onClick={() => getProductByIdThunkActionCreator()} href="/products">
          {product.name}
        </a>
      )}
      <button onClick={(e) => handleOnEdit(e, product.id)} className="btn btn-warning">
        Edit
      </button>
      <button onClick={(e) => handleOnDelete(e, product.id)} className="btn btn-danger">
        Delete
      </button>
    </div>
  )
}

Product.propTypes = {}

export default Product
