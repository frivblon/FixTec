import React from "react";
import Carousel from "./Carousel";
import Navbar from "./navBar";
import Footer from "./Footer";
import "./App.css"; // Si quieres añadir estilos globales

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Carousel />   
      <Footer/> 
    </div>
  );
}

export default App;
