import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    const {name, img} = product;
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
            </div>
            <button className='product-btn' onClick={() => handleAddToCart(product)}>
            <p>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;