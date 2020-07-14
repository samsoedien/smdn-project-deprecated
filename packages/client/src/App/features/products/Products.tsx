import React from 'react'
// import PropTypes from 'prop-types'

import ProductForm from './ProductForm'
import ProductList from './ProductList'

export interface IProductsProps {}

const Products: React.FC<IProductsProps> = (props) => {
  return (
    <>
      <ProductForm />
      <ProductList />
    </>
  )
}

Products.propTypes = {}

export default Products
