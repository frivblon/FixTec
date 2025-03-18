import React, { useState } from "react";
import "./Carousel.css";
import Navbar from "./navBar";
import Footer from "./Footer"; 
const Login = () => {
  const [userType, setUserType] = useState("cliente");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Inicio de sesión como ${userType}`, formData);
    // Aquí puedes manejar la autenticación
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <Navbar /> 
        <h2 className="login-title">
          Iniciar Sesión ({userType === "cliente" ? "Cliente" : "Técnico"})
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

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
