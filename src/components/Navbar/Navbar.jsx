import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    // <div>Navbar</div>

    <div className="nav-container">
      <nav className="nav-bar">
        <h1 className="navbar-logo">ShopSale</h1>
        <Link className="carrito" to={"/cart"}>🛒</Link>
      </nav>
    </div>
  )
}

export default Navbar;