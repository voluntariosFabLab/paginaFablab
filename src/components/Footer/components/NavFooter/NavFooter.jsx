import { Link, useLocation } from "react-router-dom";
import SocialMedias from "../SocialMedias/SocialMedias";
import "./NavFooter.css";

const NavFooter = () => {
  const location = useLocation();

  return (
    <div className="container__nav__footer">
      <section>
        <img src="/logo.webp" alt="logoFablab" className="logo__footer" />
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
        <SocialMedias />
      </section>
      <p className="copyright__footer">
        Copyright © 2024 FabLab Santa Cruz - Todos los derechos reservados.
      </p>
    </div>
  );
};

export default NavFooter;
