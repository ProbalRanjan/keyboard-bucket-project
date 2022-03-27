import React from 'react';
import './Cart.css'

const Cart = ({ cart, setCart }) => {

    const cartButtonHandler = (button) => {
        if (button === 'Choose') {
            const randomItem = [cart[Math.floor(Math.random() * cart.length)]]
            setCart(randomItem)
        }

        else {
            setCart([])
        }

    }

    return (
        <div className='cart'>
            <h3>Selected Keyboards</h3>
            <div>
                <p>Cart: {cart.length}</p>
                <div>
                    {
                        cart.map((item) => (
                            <div key={item.id} className='cart-items'>
                                <img src={item.image} alt="" />
                                <h4>{item.name.slice(0, 30)}...</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <button onClick={() => cartButtonHandler('Choose')} className='choose-btn'>
                    <p>Choose the Best One</p>
                </button>
                <button onClick={cartButtonHandler} className='reset-btn'>
                    <p>Reset</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;