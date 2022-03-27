import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, addToCart }) => {
    const { name, price, image } = product;

    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p className='product-price'>Price: ${price}</p>
            </div>
            <button onClick={() => addToCart(product)} className='product-btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;