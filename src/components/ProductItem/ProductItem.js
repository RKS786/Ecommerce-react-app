// /src/components/ProductItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct, deleteProduct, addToCart } from '../actions';
import './styles/ProductItem.css';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    const handleEditToggle = () => setIsEditing(!isEditing);

    const handleInputChange = (e) => {
        setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
    };

    const handleUpdateProduct = () => {
        dispatch(updateProduct(editedProduct));
        setIsEditing(false);
    };

    const handleDeleteProduct = () => {
        dispatch(deleteProduct(product.id));
    };

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
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
                            type="text"
                            name="rating"
                            value={editedProduct.rating}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="description"
                            value={editedProduct.description}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleUpdateProduct}>Save</button>
                        <button onClick={handleEditToggle}>Cancel</button>
                    </div>
                ) : (
                    <div>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <p>{product.description}</p>
                        <div className="product-buttons">
                            <button onClick={handleEditToggle}>Edit</button>
                            <button onClick={handleDeleteProduct}>Delete</button>
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
