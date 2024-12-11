import React from "react";
import "./Carousel.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contáctanos</h4>
          <p>Email: FixTec@gmail.com</p>
          <p>Teléfono: +52 4446271158</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <ul className="social-links">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
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
