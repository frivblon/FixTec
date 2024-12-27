import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Cambié Switch por Routes
import Carousel from "./Carousel";
import AboutPage from "./AboutPage";
import Contacto from "./Contacto";
import Servicios from "./Servicios";
//import "./App.css"; // Si quieres añadir estilos globales

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
