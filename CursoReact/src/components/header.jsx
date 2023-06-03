import "./header.css"
const Header = () => {
    return ( 
        <div className="Header">
            <h1>TiendaOnline</h1>
            <div>
            <ul className="UL">
                <li className="LI">Inicio</li>
                <li className="LI">Productos</li>
                <li className="LI">Carrito</li>
                <li className="LI"><img src="../assets/svgCarrito.svg" alt="" /></li>
            </ul>
            <img src="../assets/svgCarrito.svg" alt="" />
            </div>
        </div>
    )
}
export default Header;