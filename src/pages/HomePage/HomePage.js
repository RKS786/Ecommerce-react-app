// /src/pages/HomePage.js
import React from 'react';
import ProductList from '../../components/ProductList/ProductList';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Our E-Commerce Store</h1>
            <ProductList />
        </div>
    );
};

export default HomePage;
