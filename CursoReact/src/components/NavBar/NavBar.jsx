import React from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

/*
<li className="LI">Inicio</li>
            <li className="LI">Productos</li>
            <li className="LI">Ofertas</li>
            <li className="LI">
                <CartWidget/>
            </li>
*/

const NavBar = () => {
    return (
        <nav className="nav-container">
        <ul className="UL nav-ul">
            <Link className="li" to="/">
            Home
            </Link>
            <Link className="li" to="/about">
            About
            </Link>
            <Link className="li" to="/contact">
            Contact
            </Link>
        </ul>
    </nav>
    )
}

export default NavBar;


