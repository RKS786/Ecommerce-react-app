import axios from "axios";
import * as actionTypes from './actionTypes';
import { toast } from 'react-toastify';

const API_URL = 'https://my-json-server.typicode.com/RKS786/Ecommerce-react-app';

// Fetch Products Action
export const fetchProducts = () => async dispatch => {
    dispatch({type:actionTypes.FETCH_PRODUCTS_PENDING});
    try{
        const response = await axios.get(`${API_URL}/products`);
        dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data });
    }catch(error){
        dispatch({ type: actionTypes.FETCH_PRODUCTS_FAILURE, payload: error });
        toast.error('Failed to fetch products.');
    }
}

// Add Product Action
export const addProduct = (product) => async dispatch => {
    dispatch({ type: actionTypes.ADD_PRODUCT_PENDING });
    try{
        const response = await axios.post(`${API_URL}/products`);
        const newProduct = { ...product, id: response.data.id };
        dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, payload: newProduct });
        toast.success('Product added successfully!');
        return newProduct;
    }catch(error){
        dispatch({ type: actionTypes.ADD_PRODUCT_FAILURE, payload: error });
        toast.error('Failed to add product.');
    }
}


// Delete Product Action
export const deleteProduct = (id) => async dispatch => {
    dispatch({ type: actionTypes.DELETE_PRODUCT_PENDING });
    try{
        const response = await axios.delete(`${API_URL}/products/${id}`);
        dispatch({ type: actionTypes.DELETE_PRODUCT_SUCCESS, payload: id });
        toast.success('Product deleted successfully!');
    }catch(error){
        dispatch({ type: actionTypes.DELETE_PRODUCT_FAILURE, payload: error });
        toast.error('Failed to delete product.');
    }
}

// Update Product Action
export const updateProduct = (id, updatedProduct) => async dispatch => {
    dispatch({ type: actionTypes.UPDATE_PRODUCT_PENDING });
    try{
        const response = await axios.put(`${API_URL}/products/${id}`, updatedProduct);
        dispatch({ type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: response.data });
        toast.success('Product updated successfully!');
    }catch(error){
        dispatch({ type: actionTypes.UPDATE_PRODUCT_FAILURE, payload: error });
        toast.error('Failed to update product.');
    }
}

// Add to Cart Action
export const addToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    };
};