import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    // const total = cart.reduce((total, prd) => total + prd.price, 0); //5
    //Alternative of reduce
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = formatNumber(total + product.price);
    }

    let shipping = 0; //7
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = formatNumber(total * 0.1);
    
    const grandTotal = total + shipping + tax;
    
    return (
        <div>
            <h4>Order Summary</h4>{/*1*/}
            <p>Items ordered: {cart.length}</p> {/*4*/}
            <p>Product Price: ${total}</p> {/*9*/}
            <p><small>Shipping cost: ${shipping}</small></p> {/*8*/}
            <p><small>Tax + VAT: ${tax}</small></p> {/*10*/}
            <p>Total Price: ${grandTotal}</p> {/*6*/}
        </div>
    );
};

export default Cart;