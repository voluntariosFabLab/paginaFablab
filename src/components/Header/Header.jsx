import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "./assets/logo.webp";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <section className="header__section">
        <Link to="/" ><img src={logo} alt="logo" className="header__section__logo" /></Link>
      </section>
      <nav className="nav">
        <Link
          to="/"
          className={`nav__link ${
            location.pathname === "/" ? "nav__link--active" : ""
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/about"
          className={`nav__link ${
            location.pathname === "/about" ? "nav__link--active" : ""
          }`}
        >
          Nosotros
        </Link>
        <Link
          to="/services"
          className={`nav__link ${
            location.pathname === "/services" ? "nav__link--active" : ""
          }`}
        >
          Servicios Fab
        </Link>
        <Link
          to="/workshops"
          className={`nav__link ${
            location.pathname === "/workshops" ? "nav__link--active" : ""
          }`}
        >
          Talleres
        </Link>
        <Link
          to="/contact"
          className={`nav__link ${
            location.pathname === "/contact" ? "nav__link--active" : ""
          }`}
        >
          Contacto
        </Link>
      </nav>
      <section className="header_section"> </section>
    </header>
  );
};

export default Header;
