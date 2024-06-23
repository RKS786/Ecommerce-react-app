import react from "react"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart );

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">eCommerce</Link>
            <div className="navbar-links">
                <Link to="/" >Products</Link>
                <Link to="/addProduct">Add a Product</Link>
            </div>
            <div className="navbar-links m-g-l">
                <Link to="/cart">Cart ({cartItems.length})</Link>
            </div>
        </nav>
    )
}

export default Navbar;