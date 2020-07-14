import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { IProduct } from '@smdn-project/shared'
import ProductItem from '../ProductItem'

export interface IProductListProps {}

interface IAppState {
  products: IProduct[]
}

const ProductList: React.FC<IProductListProps> = () => {
  const products = useSelector((state: IAppState) => state.products)
  return (
    <ul>
      {products.map((product, index: number) => (
        <li>
          <ProductItem key={index} product={product} />
        </li>
      ))}
    </ul>
  )
}

ProductList.propTypes = {}

export default ProductList
