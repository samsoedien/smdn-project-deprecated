import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { RootState } from '../../../store/store'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

export interface IProductsProps {}

const Products: React.FC<IProductsProps> = () => {
  const products = useSelector((state: RootState) => state.products)
  return (
    <>
      <ProductForm />
      <ProductList products={products} />
    </>
  )
}

Products.propTypes = {}

export default Products
