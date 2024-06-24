import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct, deleteProduct, addToCart } from '../../redux/actionCreators';
import './ProductItem.css';

const ProductItem = ({ product }) => {
    // Log the product for debugging purposes
    console.log("product", product);

    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    // Toggle the edit state
    const handleEditToggle = () => setIsEditing(!isEditing);

    // Handle input changes and update the edited product state
    const handleInputChange = (e) => {
        setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
    };

    // Dispatch updateProduct action and exit edit mode
    const handleUpdateProduct = () => {
        dispatch(updateProduct(product.id, editedProduct));
        setIsEditing(false);
    };

    // Dispatch deleteProduct action
    const handleDeleteProduct = () => {
        dispatch(deleteProduct(product.id));
    };

    // Dispatch addToCart action
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    // Render stars for product rating
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
        <div className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={editedProduct.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="price"
                            value={editedProduct.price}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="rating"
                            value={editedProduct.rating}
                            onChange={handleInputChange}
                            min="0"
                            max="5"
                        />
                    </div>
                ) : (
                    <div>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <div className="rating">{renderStars(product.rating)}</div>
                    </div>
                )}
            </div>
            <div className="product-description">
                {isEditing ? (
                    <textarea
                        name="description"
                        value={editedProduct.description}
                        onChange={handleInputChange}
                    />
                ) : (
                    <p>{product.description}</p>
                )}
                <div className="product-buttons">
                    {isEditing ? (
                        <>
                            <button onClick={handleUpdateProduct}>Save</button>
                            <button onClick={handleEditToggle}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleEditToggle}>Edit</button>
                            <button onClick={handleDeleteProduct}>Delete</button>
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
