import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actionCreators";


const ProductList = () => {
    const dispatch = useDispatch();
    const {products, loading, error} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch])

    if(loading) {
        return <p>loading...</p>
    }
    if(error) {
        return <p>Error Loading Products: {error}</p>
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