import React from "react";
import "./Carousel.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Domicilio particular:</h4>
          <h5>Calle Prados De Soledad, Sierra de Alvarez #84</h5>
        </div>
        <div className="footer-section">
          <h4>Contáctanos</h4>
          <p>Email: fixtecslp@outlook.com</p>
          <p>Teléfono: +52 4446271158</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <ul className="social-links">
            <li><a href="#facebook">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FixTec. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
