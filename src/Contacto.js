import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import emailjs from "emailjs-com";
import "./Carousel.css"; // Si quieres usar tu propio estilo
import Footer from "./Footer"; // Importa tu componente Footer
import Navbar from "./navBar"; // Importa tu componente Navbar

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id", // Aquí usa el ID de tu servicio de EmailJS
        "template_id", // Aquí usa el ID de tu plantilla de correo en EmailJS
        e.target,
        "user_id" // Aquí usa el ID de tu usuario de EmailJS
      )
      .then(
        (result) => {
          setSuccessMessage("¡Correo enviado correctamente!");
          setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
        },
        (error) => {
          setErrorMessage("Hubo un error al enviar el correo. Intenta nuevamente.");
        }
      );
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 22.1463805, // Latitud de tu ubicación
    lng: -100.9120316, // Longitud de tu ubicación
  };

  return (
    <div className="contact-page">
      <Navbar /> {/* Agrega el Navbar al principio */}

      <h1>Contacto</h1>

      {/* Sección con la información de contacto */}
      <section className="contact-info">
        <h2>Información de Contacto</h2>
        <p>
        Domicilio particular:
        Calle Prados De Soledad, Sierra de Alvarez #84
        </p>
        <p>Teléfono: +52 444 627 1158 </p>
        <p>Email: fixtecslp@outlook.com</p>
      </section>

      {/* Formulario para enviar correo electrónico */}
      <section className="contact-form">
        <h2>Envía un mensaje</h2>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </section>

      {/* Mapa de Google Maps usando iframe */}
<section className="google-map">
  <h2>Ubicación</h2>
  <iframe
    title="Mapa de nuestra ubicación"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.93307400461!2d-100.91203164861008!3d22.146380528723025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa3e7ec3b8553%3A0x5685edc54955af54!2sC.%20Sierra%20de%20%C3%81lvarez%2084%2C%20Prados%20de%20Soledad%2C%2078438%20Soledad%20de%20Graciano%20S%C3%A1nchez%2C%20S.L.P.!5e0!3m2!1ses!2smx!4v1735196463741!5m2!1ses!2smx"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>

      <Footer /> {/* Agrega el Footer al final */}
    </div>
  );
};

export default ContactPage;