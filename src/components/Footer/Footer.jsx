import NavFooter from "./components/NavFooter/NavFooter";
import Schedule from "./components/Schedule/Schedule";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer__app">
      <h3 className="footer__title__app">UBICACIÓN</h3>
      <div className="location__section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1899.6867207338698!2d-63.19335940583776!3d-17.774137835293097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7c1ef48c399%3A0xeeccdce63103b937!2sFAB%20LAB%20SANTA%20CRUZ!5e0!3m2!1sen!2sbo!4v1723898639594!5m2!1sen!2sbo"
          width="600"
          height="450"
          allowFullScreen=""
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map__fablab"
        ></iframe>
        <Schedule />
      </div>
      <NavFooter />
    </footer>
  );
};

export default Footer;
