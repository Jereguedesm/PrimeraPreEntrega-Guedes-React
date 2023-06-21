import React from "react";
import "./header.css"
import {Link} from "react-router-dom"



const Header = () => {
    return ( 
        <div>
            <Link to="/">
            <h1>PCMAX</h1>
            </Link>
        </div>
    )
}
export default Header;