import React from 'react';
import Navbar from './navBar'; // Importa tu componente Navbar
import Footer from './Footer'; // Importa tu componente Footer
import './Carousel.css'; // Importa tu componente Carousel

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h1>Acerca de Nosotros</h1>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <p style={{ flex: 1, margintop:'20px' }}>
            <br></br><br></br>Bienvenidos a FixTec, donde ofrecemos soluciones tecnológicas de alta calidad para 
            el mantenimiento preventivo y correctivo de equipos de cómputo, consolas de videojuegos, 
            reparación de monitores o televisores, así como el desarrollo de aplicaciones móviles y 
            web.
            Nuestro compromiso es garantizar la satisfacción de nuestros clientes a través de servicios 
          rápidos, efectivos y con el mejor soporte técnico. Ya sea que necesites reparar tu equipo o 
          desarrollar un nuevo proyecto de software, nuestro equipo está aquí para ayudarte.
          </p>
          <img 
            src="/bienvenido.png" 
            alt="Imagen de servicios tecnológicos" 
            style={{ width: '600px', borderRadius: '10px' }} 
          />
        </div>
        
        <h2>Nuestra Misión</h2>
        <div style={{ display: 'flex', gap: '0px', alignItems: 'flex-start' }}>
          <img 
            src="/Mision.png" 
            alt="Imagen representando la misión" 
            style={{ width: '600px', borderRadius: '10px' }} 
          />
          <p style={{ flex: 1 }}>
            Proporcionar soluciones tecnológicas innovadoras y accesibles que superen las expectativas de 
            nuestros clientes, fomentando la confianza y estableciendo relaciones a largo plazo.
          </p>
        </div>
      
        <h2>Nuestros Valores</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <ul style={{ flex: 1 }}>
            <li>Compromiso con la calidad</li>
            <li>Innovación constante</li>
            <li>Atención personalizada</li>
            <li>Ética profesional</li>
          </ul>
          <img 
            src="/valores.png" 
            alt="Imagen de valores empresariales" 
            style={{ width: '300px', borderRadius: '10px' }} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;