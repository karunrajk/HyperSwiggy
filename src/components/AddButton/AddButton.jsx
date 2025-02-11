import React from 'react'
import './AddButton.css'
import { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';


// const AddButton = ({itemId}) => {
//     const [count, setCount]=useState(0);
//     const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

//     const handleAdd=() => {
//         // setCount(prev=>prev+1);
//         addToCart(itemId);
//         console.log(cartItems);
//         console.log(itemId);    }
//     const handleRemove=()=>{
//         // setCount(prev=>prev===0?0:prev-1);
//         removeFromCart(itemId);
//     }
//     const itemCount = cartItems[itemId] || 0;

//   return (
//     <div className='AddButtonContainer' >
//     { itemCount===0?
//     <button className="add-button" onClick={handleAdd}>
//         ADD
//     </button>:
//     <div className='CounterContainer'>
//       <button className='subtractButton' onClick={handleRemove}>-</button>
//       <span className='count'>{itemCount}</span>
//       <button className='addButton' onClick={handleAdd}>+</button>
//     </div>
//     }


//     </div>
//   )
// }

const AddButton = ({ itemId }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    console.log('AddButton rendered for itemId:', itemId);
    console.log('Current cartItems state:', cartItems);

    const handleAdd = () => {
        console.log('Add clicked for itemId:', itemId);
        addToCart(itemId);
    };

    const handleRemove = () => {
        console.log('Remove clicked for itemId:', itemId);
        removeFromCart(itemId);
    };

    return (
        <div className='AddButtonContainer'>
            {(!cartItems[itemId]) ? (
                <button 
                    className="add-button" 
                    onClick={handleAdd}
                >
                    ADD
                </button>
            ) : (
                <div className='CounterContainer'>
                    <button 
                        className='subtractButton' 
                        onClick={handleRemove}
                    >
                        −
                    </button>
                    <span className='count'>{cartItems[itemId].quantity}</span>
                    <button 
                        className='addButton' 
                        onClick={handleAdd}
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddButton
