import React from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {
    return (
        <nav>
        <ul className="UL">
            <li className="LI">Inicio</li>
            <li className="LI">Productos</li>
            <li className="LI">Ofertas</li>
            <li className="LI">
                <CartWidget/>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar;


