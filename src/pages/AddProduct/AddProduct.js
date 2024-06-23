import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actionCreators';
import './AddProduct.css';

const AddProduct = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        rating: '',
        image: '' // Optional: URL of the product image
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch action to add product
        dispatch(addProduct(product));
        // Clear form after submission
        setProduct({
            name: '',
            description: '',
            price: '',
            rating: '',
            image: ''
        });
    };

    return (
        <div className="add-product">
            <h2>Add a Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price ($)</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating (1-5)</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={product.rating}
                        onChange={handleChange}
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image URL (Optional)</label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
