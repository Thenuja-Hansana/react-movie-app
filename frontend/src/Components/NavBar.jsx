import {Link} from "react-router-dom";
import '../css/Navbar.css'
import logo from '../assets/image.png'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={logo} alt="" className="navbar-logo" />
                    Movefy
                </Link>
            </div>

            <div className="navbar-brand">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourite" className="nav-link">Favourites</Link>
            </div>
        </nav>
    )
}

export default NavBar;