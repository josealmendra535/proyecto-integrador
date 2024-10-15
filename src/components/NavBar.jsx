import "./navbar.css"
import CartWidget from "./CartWidget"
import cart from '../assets/cart.png'

const NavBar = () => {
    return(
        <nav className="navbar">
            <img src={cart} width={20} />

            <div className="brand">
            <h2>Vestuario Igjav</h2>
            </div>

            <ul>
                <li>Polerón</li>
                <li>Poleras</li>
                <li>Pantalón</li>
            </ul>

            <CartWidget />
            </nav>
    )
}

export default NavBar