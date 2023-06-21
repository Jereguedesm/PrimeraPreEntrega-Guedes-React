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
            <Link className="li" to="/electronics">
            Electrónica
            </Link>
            <Link className="li" to="/jewelery">
            Joyería
            </Link>
            <Link className="li" to="/mensClothing">
            Prendas de mujer
            </Link>
            <Link className="li" to="/womensClothing">
            Prendas de hombre
            </Link>
        </ul>
    </nav>
    )
}

export default NavBar;


