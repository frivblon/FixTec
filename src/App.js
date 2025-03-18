import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Cambié Switch por Routes
import Carousel from "./Carousel";
import AboutPage from "./AboutPage";
import Contacto from "./Contacto";
import Servicios from "./Servicios";
import InicioSesion from "./InicioSesion";
import Registro from "./Registro";


function App() {
  return (
    <Router>
      <div className="App">
        {/* Define las rutas dentro del Router, utilizando Routes y element */}
        <Routes>
          <Route path="/" element={<Carousel />} /> {/* Ruta para la página principal con el carrusel */}
          <Route path="/about" element={<AboutPage />} /> {/* Ruta para la página "Sobre Nosotros" */}
          <Route path="/Contact" element={<Contacto />} /> {/* Ruta para la página "Contacto" */}
          <Route path="/services" element={<Servicios />} /> {/* Ruta para la página "Servicios" */}
          <Route path="/InicioSesion" element={<InicioSesion />} /> {/* Ruta para la página "Iniciar Sesion" */}
          <Route path="/Registro" element={<Registro />} /> {/* Ruta para la página "Registro" */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
