import react from "react"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart );

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">E-commerce</Link>
            <div className="navbar-links">
                <Link to="/" >Home</Link>
                <Link to="/cart">Cart ({cartItems.length})</Link>
            </div>
        </nav>
    )
}

export default Navbar;