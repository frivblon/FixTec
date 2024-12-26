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
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
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
        <div style={{ display: 'flex', gap: '0px', alignItems: 'center' }}>
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
      
        <h2 style={{ textAlign: 'center' }}>Valores</h2>
<div
  style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center', // Alinea verticalmente los elementos
    justifyContent: 'space-between', // Espacia los elementos: lista a la derecha e imagen a la izquierda
    marginTop: '20px'
  }}
>
  <ul style={{
    flex: 1,
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center', // Alinea el texto de los elementos de la lista a la derecha
    margin: 0
  }}>
    <li><p>Compromiso con la calidad</p></li>
    <li><p>Innovación constante</p></li>
    <li><p>Atención personalizada</p></li>
    <li><p>Ética profesional</p></li>
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