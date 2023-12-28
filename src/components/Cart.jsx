import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { removeCart, addToCart, quantity } from '../redux/CartSlice';

export default function Cart() {
    const cartItems = useSelector((state) => state.carts.cart);
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (itemId) => {
        dispatch(addToCart({ _id: itemId }));
    };

    const handleDecreaseQuantity = (itemId) => {
        dispatch(quantity(itemId));
    };



    return (
        <div>
            {cartItems.length === 0 ? (
                <div className='emptyCart'>
                    <p>Your Cart is Empty?...</p>
                </div>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className='cartClass'>
                        <div className='cartImageContainer'>
                            <img src={item.image} className='images' alt={item.title} />
                        </div>
                        <div className='cartTxtContainer'>
                            <p className='txt'>{item.title}</p>
                            <p className='txt'>{item.description}</p>
                            <p className='txt'>Price: ${item.price}</p>

                            <div className='quantityButtons'>
                                <p className='txt'>Quantity: </p>
                                <button
                                    onClick={() => handleDecreaseQuantity(item._id)}
                                    disabled={item.quantity === 1}
                                    className='quantityBtn'
                                >
                                    -
                                </button>
                                <p>{item.quantity}</p>
                                <button className='quantityBtn' onClick={() => handleIncreaseQuantity(item._id)}>
                                    +
                                </button>
                            </div>

                            <button className='crtBtn' onClick={() => dispatch(removeCart(item._id))}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
