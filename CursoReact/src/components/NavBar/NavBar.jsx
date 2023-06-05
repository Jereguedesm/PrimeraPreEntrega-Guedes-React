import React from "react";
import "./NavBar.css"
import Cart from "../Cart/Cart"



const NavBar = () => {
    return (
        <nav>
        <ul className="UL">
            <li className="LI">Inicio</li>
            <li className="LI">Productos</li>
            <li className="LI">Ofertas</li>
            <li className="LI">
                <Cart/>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar;


