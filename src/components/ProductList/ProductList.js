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

    // Fetch products when the component mounts
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // Sort products by price
    const sortProducts = () => {
        const sorted = [...products].sort((a, b) =>
            sortAscending ? a.price - b.price : b.price - a.price
        );
        setSortedProducts(sorted);
    };

    // Toggle sort order between ascending and descending
    const toggleSort = () => {
        sortProducts();
        setSortAscending(!sortAscending);
    };

    // Cancel sorting and show original product list
    const cancelSort = () => {
        setSortedProducts([]);
    };

    if (loading) {
        return <Loader />;  // Show loader while products are being fetched
    }
    if (error) {
        return <p>Error Loading Products: {error.message || error}</p>;  // Show error message if fetching fails
    }

    return (
        <div className="product-list">
            <div className="sort-bar">
                <button onClick={toggleSort}>
                    Sort by Price {sortAscending ? '↑' : '↓'}
                </button>
                {sortedProducts.length > 0 && (
                    <button onClick={cancelSort} className="cancel-button">
                        &#10006;
                    </button>
                )}
            </div>
            {sortedProducts.length > 0 ? (
                sortedProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
            ) : (
                products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
            )}
        </div>
    );
};

export default ProductList;
