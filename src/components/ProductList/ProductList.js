// /src/components/ProductList/ProductList.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actionCreators";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../../UI/Loader";
import './ProductList.css';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortAscending, setSortAscending] = useState(true);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        // Sort products when the component mounts or when sort order changes
        sortProducts();
    }, [products, sortAscending]);

    const sortProducts = () => {
        const sorted = [...products].sort((a, b) =>
            sortAscending ? a.price - b.price : b.price - a.price
        );
        setSortedProducts(sorted);
    };

    const toggleSort = () => {
        setSortAscending(!sortAscending);
    };

    const cancelSort = () => {
        setSortedProducts([]);
    };

    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <p>Error Loading Products: {error.message || error}</p>;
    }

    return (
        <div className="product-list">
            <div className="sort-bar">
                <button onClick={toggleSort}>
                    Sort by Price {sortAscending ? '↓' : '↑'}
                </button>
                {sortedProducts.length > 0 && (
                    <button onClick={cancelSort} className="cancel-button">
                        &#10006;
                    </button>
                )}
            </div>
            {sortedProducts.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
            {sortedProducts.length === 0 && (
                <>
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </>
            )}
        </div>
    );
};

export default ProductList;
