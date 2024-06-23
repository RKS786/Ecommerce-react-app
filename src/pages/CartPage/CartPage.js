import React from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart);
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul className="cart-items">
                    {cartItems.map(product => (
                        <div className="product-item">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>${product.price}</p>
                                    <div className="rating">{renderStars(product.rating)}</div>
                                </div>
                        </div>
                        <div className="product-description">
                            
                                <p>{product.description}</p>
                            
                        </div>
                    </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;
