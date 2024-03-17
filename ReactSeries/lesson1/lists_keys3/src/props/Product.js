//src/props/Product.js
import React from 'react';

function Product ({name,price}) {
    return (
        <div>
          <span>{name}==={price}</span>
        </div>
    )
}

export default Product;

/* 
In this example, the Product component is a simple functional
 component that receives name
 and price as props and renders the product details accordingly.
*/