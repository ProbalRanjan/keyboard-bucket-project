import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, image } = props.product

    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;