import * as actionTypes from "./actionTypes";

const initialState = {
    products: [],
    loading: false,
    error: null
};

export const productReducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS_PENDING:
        case actionTypes.ADD_PRODUCT_PENDING:
        case actionTypes.UPDATE_PRODUCT_PENDING:
        case actionTypes.DELETE_PRODUCT_PENDING:
            return{
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.FETCH_PRODUCTS_FAILURE:
        case actionTypes.ADD_PRODUCT_PENDING:
        case actionTypes.UPDATE_PRODUCT_PENDING:
        case actionTypes.DELETE_PRODUCT_PENDING:
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                products: action.payload,
                loading: false,
                error: null
            };
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return{
                ...state,
                products: action.payload,
                loading: false,
                error: null
            };
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return{
                ...state,
                products: action.payload,
                loading: false,
                error: null
            };
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return{
                ...state,
                products: state.products.filter((product)=> product.id !== action.payload),
                loading: false,
                error: null
            }
        default:
             return state;
    }
}

export const cartReducer = (state=[], action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return[
                ...state,
                action.payload
            ];
        default:
            return state;
        }
};

