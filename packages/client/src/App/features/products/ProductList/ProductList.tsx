import React from 'react'
import PropTypes from 'prop-types'

import { IProduct } from '@smdn-project/shared'
import ProductItem from '../ProductItem'

export interface IProductListProps {
  products: IProduct[]
}

const ProductList: React.FC<IProductListProps> = ({ products }) => {
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

ProductList.propTypes = {
  products: PropTypes.any.isRequired,
}

export default ProductList
