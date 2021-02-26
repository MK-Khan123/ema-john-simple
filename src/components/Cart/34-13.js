//Cart.js
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

//Shop.js
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) => {
        // console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart> {/*2 declared Cart component*/} {/*3 cart props is passed*/}
            </div>
        </div>
    );
};

export default Shop;