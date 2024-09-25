import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logoHeader.png";

function Header() {
    return (
        <header className = "header">
            <NavLink to = "/"><img src = {logoHeader} alt = "Logo Kasa" className="logo-header"/></NavLink>
            <nav className = "header__nav">
                <NavLink to = "/">Accueil</NavLink>
                <NavLink to = "/apropos">A propos </NavLink>
            </nav>
        </header>
    );
};

export default Header;