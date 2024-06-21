import axios from "axios";
import * as actionTypes from './actionTypes';

const API_URL = 'https://my-json-server.typicode.com/RKS786/E-commerce-react-app';

// Fetch Products Action
export const fetchProducts = () => async dispatch => {
    dispatch({type:actionTypes.FETCH_PRODUCTS_PENDING});
    try{
        const response = await axios.get(`${API_URL}/products`);
        dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data });
    }catch(error){
        dispatch({ type: actionTypes.FETCH_PRODUCTS_FAILURE, payload: error });
    }
}

// Add Product Action
export const addProduct = (product) => async dispatch => {
    dispatch({ type: actionTypes.ADD_PRODUCT_PENDING });
    try{
        const response = await axios.post(`${API_URL}/products`);
        dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, payload: response.data});
    }catch(error){
        dispatch({ type: actionTypes.ADD_PRODUCT_FAILURE, payload: error });
    }
}


// Delete Product Action
export const deleteProduct = (id) => async dispatch => {
    dispatch({ type: actionTypes.DELETE_PRODUCT_PENDING });
    try{
        const response = await axios.delete(`${API_URL}/proudcts/${id}`);
        dispatch({ type: actionTypes.DELETE_PRODUCT_SUCCESS, payload: id });
    }catch(error){
        dispatch({ type: actionTypes.DELETE_PRODUCT_FAILURE, payload: error });
    }
}

// Update Product Action
export const updateProduct = (id, updatedProduct) => async dispatch => {
    dispatch({ type: actionTypes.UPDATE_PRODUCT_PENDING });
    try{
        const response = await axios.put(`${API_URL}/proudcts/${id}`, updatedProduct);
        dispatch({ type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: response.data });
    }catch(error){
        dispatch({ type: actionTypes.UPDATE_PRODUCT_FAILURE, payload: error });
    }
}

// Add to Cart Action
export const addToCart = (product) => {
    dispatch({ type: actionTypes.addToCart, payload: product })
}