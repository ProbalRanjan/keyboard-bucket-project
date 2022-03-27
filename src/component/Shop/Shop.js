import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        if (cart.length < 4) {
            const itemIndex = cart.findIndex((item) => item === product);

            if (itemIndex > -1) {
                alert('Product is Already Added')
            }
            else {
                setCart([...cart, product])
            }
        }

        else {
            alert("You can't add more than 4 items")
        }
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div>
                <Cart cart={cart} setCart={setCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;