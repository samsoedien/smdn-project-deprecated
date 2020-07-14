import React, { MouseEvent } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { removeProductActionCreator } from '../../../../store/products/products'

export interface IProductModel {
  id: string
  name: string
}

export interface IProductProps {
  product: IProductModel
}

const Product: React.FC<IProductProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleOnDelete = (e: MouseEvent, id: string): void => {
    e.preventDefault()
    dispatch(removeProductActionCreator({ id, name: '' }))
  }
  return (
    <div>
      {product.name}
      <button onClick={(e) => handleOnDelete(e, product.id)} className="btn btn-danger">
        Delete
      </button>
    </div>
  )
}

Product.propTypes = {}

export default Product
