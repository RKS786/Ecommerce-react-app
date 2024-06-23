import React from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart);

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul className="cart-items">
                    {cartItems.map(item => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                
                                <p>Price: ${item.price}</p>
                                <p>Rating: {item.rating}</p>
                            </div>
                            <div><p>{item.description}</p></div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;
