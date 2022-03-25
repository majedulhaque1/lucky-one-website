import React from 'react';
import './Cart.css';

const Cart = ({cartItem}) => {
    console.log(cartItem.id);
    const {img, name} = cartItem;
    return (
        <div className='cart'>
            <div className='cart-top'>
                <img src={img} alt="" />
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Cart;