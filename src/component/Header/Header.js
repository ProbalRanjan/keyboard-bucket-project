import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2 className='header-title'>KEYBOARD BUCKET</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/shop">Shop</a>
                <a href="/cart">Cart</a>
            </nav>
        </div>
    );
};

export default Header;