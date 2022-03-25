import React from 'react';
import './Selection.css'

const Selection = () => {
    return (
        <div className='selection'>
            <h3>Selected Keyboards</h3>
            <div id="added-products">

            </div>
            <button className='choose-btn'>
                <p>Choose the Best One</p>
            </button>
            <button className='reset-btn'>
                <p>Choose Again</p>
            </button>
        </div>
    );
};

export default Selection;