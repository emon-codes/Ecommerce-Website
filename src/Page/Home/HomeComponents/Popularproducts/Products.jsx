import React from 'react'
import useProductsJson from '../../../../Hooks/useProductsJson'

const Products = () => {
    const {product} = useProductsJson()
  return (
      <div>
          {product.map((products) => (<h1>{products.name}</h1>))}




    </div>
  )
}

export default Products
