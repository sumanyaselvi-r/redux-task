import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";


import {  Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBar= () => {
    const cartLength = useSelector((state) => state.cart.items.length);

    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>ShoppingCart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active " to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active " to={"/"}>Product</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link disable" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>

                            </li>

                        </ul>
                        <div id='cartstyle'>

                            <Link className='nav-link active' to={'/cart'}>cart<FaCartArrowDown /> <span style={{ color: 'red', fontSize: "20px", fontWeight: "bold" }}>
                            
                                {cartLength}
                            </span></Link>
                        </div>
                    </div>
                </div>

            </nav>

        </div>
            )
}

export default NavBar