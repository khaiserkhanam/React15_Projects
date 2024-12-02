import React from 'react'
import ProductDetails from './ProductDetails'
import { products } from './products'

function ProductContainer() {
    // const products=[];
    const productLength=products.length;
  return (
    <main>
       { productLength>0? (<section className="products">
           {products.map((product)=>(
            <ProductDetails
            productObj={product}
            key={product.productName}
            />
           )) }
            
        </section>
        ):<p className='noproducts'>Products will be available soon</p>}
    </main>
  )
}

export default ProductContainer
