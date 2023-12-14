import React from "react";
import { Link } from 'react-router-dom';

const Nav = ()=>{
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">All Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/add_product" className="nav-link">Add Product</Link>
                </li>
                <li className="nav-item">
                    <Link to="/categories" className="nav-link">Categories</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="/logout" className="nav-link">Logout</Link>
                </li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    )
}
export default Nav;