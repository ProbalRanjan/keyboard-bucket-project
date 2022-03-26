import React from 'react';
import './Selection.css'

const Selection = ({ selection }) => {

    return (
        <div className='selection'>
            <h3>Selected Keyboards</h3>
            <div id="added-products">
                <p>Cart: {selection.length}</p>
                <div>
                    {
                        selection.map((item) => (
                            <h4 key={item.id}>{item.name}</h4>
                        ))
                    }
                </div>
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