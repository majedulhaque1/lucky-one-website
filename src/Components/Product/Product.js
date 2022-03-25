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
            <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;