import React, { useState, useEffect } from "react";
import "./Carousel.css";
import Footer from "./Footer"; 
import Navbar from "./navBar";

// Importamos las imágenes desde la carpeta local
import desarrolloImg from "./Desarrollo.png";
import mantenimientoImg from "./Mantenimiento.png";
import ciberseguridadImg from "./Ciberseguridad.png";

const destinations = [
  { 
    name: "Desarrollo de Software", 
    description: "Expertos en el desarrollo de software de alta calidad.", 
    image: desarrolloImg
  },
  { 
    name: "Mantenimiento", 
    description: "Mantenimiento preventivo y correctivo para tus sistemas.", 
    image: mantenimientoImg
  },
  { 
    name: "Ciberseguridad", 
    description: "Asesoramiento en seguridad cibernética para tu negocio.", 
    image: ciberseguridadImg
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < destinations.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex > 0 ? currentIndex - 1 : destinations.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex < destinations.length - 1 ? currentIndex + 1 : 0
    );
  };

  return (
    <div>
      <Navbar /> 
      <div className="carousel-container">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {destinations.map((destination, index) => (
            <div className="item" key={index}>
              <div className="content">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="carousel-image" 
                />
                <div className="name">{destination.name}</div>
                <div className="des">{destination.description}</div>
                <button>See More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <button className="prev" onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" onClick={handleNext}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Carousel;
