/* 
Suppose we have another component, Cart, 
that needs access to the list of products. We can pass 
the products prop down from App to Cart, demonstrating prop drilling:
*/

import React from "react";

function Cart({products}) {
    return (
        <div>
            <h3>Cart: <span>{products.length}</span></h3>
        </div>
    )
}

export default Cart;