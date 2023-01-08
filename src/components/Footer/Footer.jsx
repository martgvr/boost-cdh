import React from "react";
import "./footer.css";

function Footer() {
  return (
      <div className="footer">
        <img src="cloud3.png" alt="" className="cloud3" />
        <footer>
            <div className="box__container">
                <div className="box">
                    <div>Logo</div>
                    <div>Lorem</div>
                    <div>Input correo</div>
                </div>
                <div className="box">
                    <h3>Links</h3>
                    <div>Home</div>
                    <div>Sobre nosotros</div>
                    <div>Nuestros servicios</div>
                    <div>Proyectos</div>
                </div>
                <div className="box">
                    <h3>Nuestra compañía</h3>
                    <div>Dirección</div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
