import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { getProductByIdThunkActionCreator } from '../../../store/products/productsSlice'
import { RootState } from '../../../store/store'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

export interface IProductsProps {}

const Products: React.FC<IProductsProps> = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.products)

  return (
    <>
      <button className="btn btn-primary" onClick={() => dispatch(getProductByIdThunkActionCreator())}>
        Get Products
      </button>
      <ProductForm />
      <ProductList products={products} />
    </>
  )
}

Products.propTypes = {}

export default Products
