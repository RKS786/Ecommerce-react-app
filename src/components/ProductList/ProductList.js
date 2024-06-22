import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actionCreators";
import ProductItem from "../ProductItem/ProductItem";
import Loader from"../../UI/Loader";


const ProductList = () => {
    const dispatch = useDispatch();
    const {products, loading, error} = useSelector((state) => state.products);
    console.log("products",products)
    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch])

    if(loading) {
        return <Loader />
    }
    if(error) {
        return <p>Error Loading Products: {error.message || error}</p>
    }

    return(
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
    
}

export default ProductList;