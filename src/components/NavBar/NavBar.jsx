import React from "react";
import Button from "../Button/Button";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <picture className="navbar__logo">
          <img src="logo.png" alt="Logo de Boost" />
      </picture>
      
      <ul className="navbar__menu">
        <li className="navbar__menu--item active">Inicio</li>
        <li className="navbar__menu--item">¿Quiénes somos?</li>
        <li className="navbar__menu--item">Tarifario</li>
        <li className="navbar__menu--item">Servicios</li>
        <Button text={'Contactanos'} width={'190px'} />
      </ul>
    </nav>
  );
}

export default NavBar;
