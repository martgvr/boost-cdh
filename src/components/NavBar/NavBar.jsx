import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <picture className="navbar__logo">
          <img src="logo.jpg" alt="Logo de Boost" />
      </picture>
      
      <ul className="navbar__menu">
        <li className="navbar__menu--item active">Home</li>
        <li className="navbar__menu--item">Menú 1</li>
        <li className="navbar__menu--item">Menú 2</li>
        <li className="navbar__menu--item">Menú 3</li>
        <li className="navbar__menu--special">Botón</li>
      </ul>
    </nav>
  );
}

export default NavBar;
