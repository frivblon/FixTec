import React, { useState, useEffect } from "react";
import "./Carousel.css";

const destinations = [
  { 
    name: "Desarrollo de Software", 
    description: "Expertos en el desarrollo de software de alta calidad.", 
    Image: "https://lh3.googleusercontent.com/pw/AP1GczOHpNJRtLCCcHEY9IS44sXM_gbLMkXSbnJECJeXBWyZuCUwkLkmnKaogR7mGKdryBAfReBb4yA7kVGGjz41PltkvdBl9wiTiYEvqcWpjrGY4jnh3Y7xSRgLjg9PRc632U6lAfLTFciOv7a-Q2ltSjTY4Q=w309-h332-s-no-gm?authuser=0"
  },
  { 
    name: "Mantenimiento", 
    description: "Mantenimiento preventivo y correctivo para tus sistemas.", 
    Image: "https://lh3.googleusercontent.com/pw/AP1GczOKQgM_JkMSnYpHX7SVIIycQlbX9P1DLmdep6YliYtS0HYScJSt7yEmKZsegJ2M4OkW_SdA9CfCm2cqOIZ9rkDjRNOQaFivnCH2eOyOZhYBT2YlWLR6h4D-5jABQOOnkktiCB1E_TsIDWkCvFdoDQcuhg=w433-h308-s-no-gm?authuser=0"
  },
  { 
    name: "Ciberseguridad", 
    description: "Asesoramiento en seguridad cibernética para tu negocio.", 
    Image: "https://lh3.googleusercontent.com/pw/AP1GczMtb_0ORNv7X2QgaRcRuADnZ9xfqqrP5_LcW9zOp3LE6p_U_DGvtr3R5bMKTvW7QkNgccd9fNI-9WKW3DyvF3j8N1naN3c0wqAx4FrKRsPthAMuVYFSaDYT8Ej4969XZC9C2zuco77LEcIbJXqsQgqEzA=w300-h300-s-no-gm?authuser=0"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < destinations.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000); // 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
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
    <div className="carousel-container">
      <div
        className="slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {destinations.map((destination, index) => (
          <div className="item" key={index}>
            <div className="content">
              <img 
                src={destination.Image} 
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
  );
};

export default Carousel;
