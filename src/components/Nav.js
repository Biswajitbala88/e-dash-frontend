import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Nav = ()=>{
    const auth = localStorage.getItem('user');

    const navigate = useNavigate();
    const logOut = ()=>{
        // console.log('test logout');
        localStorage.clear();
        navigate('./SignIn');
    }
    return(
        <nav className="bg-gray-800 p-4 ">
            <ul className="flex justify-between items-center text-white">
                <li className="mr-3">
                    <img src="logo_1.png" className="w-14" alt=""/>
                </li>
                {auth?
                (<>
                <li className="mr-3">
                <Link to="/" className="hover:text-yellow-300">All Products</Link>
                </li>
                <li className="mr-3">
                <Link to="/add_product" className="hover:text-yellow-300">Add Product</Link>
                </li>
                <li className="mr-3">
                <Link to="/categories" className="hover:text-yellow-300">Categories</Link>
                </li>
                <li className="mr-3">
                <Link to="/profile" className="hover:text-yellow-300">Profile</Link>
                </li>
                <li className="mr-3">
                
                </li>
                <li>( {JSON.parse(auth).name} )- <Link onClick={logOut} to="/SignIn" className="hover:text-yellow-300">Logout</Link></li>
                </>)
                :(<>
                <li><Link to="/SignIn" className="hover:text-yellow-300">Sign In</Link></li>
                <li><Link to="/SignUp" className="hover:text-yellow-300">Sign Up</Link></li>
                </>)
                }
            </ul>
        </nav>

    )
}
export default Nav;