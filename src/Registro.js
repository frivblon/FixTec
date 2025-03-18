import React, { useState } from "react";
import "./Carousel.css";
import Navbar from "./navBar";
import Footer from "./Footer"; 

const Register = () => {
  const [userType, setUserType] = useState("cliente");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación de contraseñas
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    
    console.log(`Registro de usuario como ${userType}`, formData);
    // Aquí puedes manejar el registro, como enviar los datos al servidor.
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <Navbar /> 
        <h2 className="login-title">
          Registro de Usuario ({userType === "cliente" ? "Cliente" : "Técnico"})
        </h2>

        {/* Selector de tipo de usuario */}
        <div className="user-type-selector">
          <button
            className={userType === "cliente" ? "active" : ""}
            onClick={() => setUserType("cliente")}
          >
            Cliente
          </button>
          <button
            className={userType === "tecnico" ? "active" : ""}
            onClick={() => setUserType("tecnico")}
          >
            Técnico
          </button>
        </div>

        {/* Formulario de registro */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
