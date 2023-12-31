// REACT
import React, { useContext } from "react";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// CONTEXT
import { SiteContext } from "../../../context/SiteContext";

// COMPONENTS
import CartWidget from "../cartWidget/CartWidget";
import SearchInput from "../searchInput/SearchInput";
import { Link as ScrollLink } from "react-scroll";

// CSS
import "./Navbar.css";

const Navbar = () => {
  const { isInStore, isInHome } = useContext(SiteContext);

  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <Link to="/" className="navbar-brand">
        landmark.
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            home
          </Link>
          <ScrollLink
            to="nosotros"
            className={
              isInHome ? "nav-item nav-link" : "nav-item nav-link disabled"
            }
            smooth={true}
          >
            nosotros
          </ScrollLink>
          <ScrollLink
            to="productos"
            className={
              isInHome ? "nav-item nav-link" : "nav-item nav-link disabled"
            }
            smooth={true}
          >
            productos
          </ScrollLink>
          <span className="nav-item nav-link navSpan">|</span>
          <Link to="/store" className="nav-item nav-link">
            tienda
          </Link>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              categorías
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/sofas" className="dropdown-item">
                sofás / sillones
              </Link>
              <Link to="/sillas" className="dropdown-item">
                sillas
              </Link>
              <Link to="/estanterias" className="dropdown-item">
                estanterías
              </Link>
              <Link to="/gabinetes" className="dropdown-item">
                gabinetes
              </Link>
              <Link to="/lamparas" className="dropdown-item">
                lámparas
              </Link>
            </div>
          </li>
        </ul>
        <div className="widgets d-flex align-items-center">
          {isInStore ? <SearchInput /> : ""}
          <div>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
