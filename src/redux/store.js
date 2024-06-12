import {createStore, combineReducers } from "redux";
import { productReducer, cartReducer } from "./reducers";

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
});

const store = createStore(rootReducer);

export default store;