import React from "react";
import "./header.css"
import {Link} from "react-router-dom"



const Header = () => {
    return ( 
        <header>
            <Link to="/">
            <h1>PCMAX</h1>
            </Link>
        </header>
    )
}
export default Header;