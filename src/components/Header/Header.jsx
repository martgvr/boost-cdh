import React from "react";
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="images">
        <img src="./cloud2.png" alt="" className="cloud2" />
        <img src="./cloud1.png" alt="" className="cloud1" />
        <img src="./rocket.png" alt="" className="rocket" />
        <img src="./moon.png" alt="" className="moon" />
      </div>
      
      <div className="text__container">
        <div className="p1">
          Despegamos con tus mejores ideas y aterrizamos haciéndolas realidad.
        </div>
        <div className="p2">
          <img src="./somos.png" alt="" />
          <img src="./logo.png" alt="" />
        </div>
        <div className="p3">
          <p>
            Te ofrecemos un servicio completo de desarrollo web, marketing y
            diseño tanto para emprendedores como para empresas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
