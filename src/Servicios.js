import React from 'react';
import Navbar from './navBar'; // Importa tu componente Navbar
import Footer from './Footer'; // Importa tu componente Footer
import './Carousel.css'; // Importa tu componente de estilo

const servicios = [
  { 
    id: 1, 
    nombre: 'Desarrollo de Software', 
    descripcion: 'Creación de aplicaciones personalizadas', 
    imagen: '/5.png' 
  },
  { 
    id: 2, 
    nombre: 'Mantenimiento de Equipos', 
    descripcion: 'Servicios de mantenimiento y reparación', 
    imagen: '/6.png'
  },
  { 
    id: 3, 
    nombre: 'Cableado Estructurado', 
    descripcion: 'Instalación de redes de cableado', 
     imagen: '/7.png'
  },
  { 
    id: 4, 
    nombre: 'Consultoría Tecnológica', 
    descripcion: 'Asesoramiento en soluciones tecnológicas', 
     imagen: '/8.png'
  },
  { 
    id: 5, 
    nombre: 'Seguridad Informática', 
    descripcion: 'Protección y seguridad de datos', 
     imagen: '/9.png'
  },
  { 
    id: 6, 
    nombre: 'Soporte Técnico', 
    descripcion: 'Asistencia técnica y resolución de problemas', 
     imagen: '/10.png'
  },
  {
  id: 7, 
    nombre: 'Diseño de Bases de Datos', 
    descripcion: 'Diseño e implementacion de Base de datos relacionales y no relacionales', 
     imagen: '/11.png'
  },
];

const Servicios = () => {
    return (
      <>
        <div className="contenedor">
          <Navbar />
          <h1 className="titulo">Servicios de FixTec</h1>
          <div className="cuadros">
            {servicios.map((servicio) => (
              <div key={servicio.id} className="cuadro">
                <h2 className="nombre-servicio">{servicio.nombre}</h2>
                <p className="descripcion-servicio">{servicio.descripcion}</p>
                <div className="imagen-servicio">
                  <img src={servicio.imagen} alt={servicio.nombre} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  };

export default Servicios;