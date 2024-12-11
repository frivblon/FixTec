import React from "react";
import "./Carousel.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src="logofixtec2.svg" alt="Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li><a href="App">Inicio</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
