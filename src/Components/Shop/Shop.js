import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomItem, setRandonItem] = useState([]);
    console.log(randomItem);
    console.log(cart);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const handleAddToCart = (productItem) =>{
        const newCart = [...cart, productItem];
        setCart(newCart);
    }
    const drawProduct = () => {
        let lengthItem = cart.length;
        // const drawItem = [Math.floor(Math.random()* lengthItem)];
        setCart([Math.floor(Math.random()* lengthItem)]);
    }
    const clearCart = () =>{
            setCart([]);
    }
    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Selected Cars</h2>
                {
                    cart.map(cartItem => <Cart key={cartItem.id} cartItem={cartItem}></Cart>)
                }
                <button onClick={drawProduct}>Choose 1 For Me</button><br/>
                <button onClick={clearCart}>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;