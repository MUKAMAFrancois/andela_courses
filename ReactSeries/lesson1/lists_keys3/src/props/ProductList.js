//src/props/ProductList.js
import React from 'react';
import Product from './Product'
function ProductList ({products}){
    return (
        <div>
            {products.map(product => (
                <Product 
                key={product.id} 
                name={product.name} 
                price={product.price} 

                />
            ))}
        </div>
    )
}

export default ProductList;


/* 
In this ProductList component:

We receive a prop called products, which is an array of product objects.
We use the map function to iterate over the array of products and render a Product component for each product.
Each Product component receives name and price as props, along with a unique key for efficient list rendering.
*/