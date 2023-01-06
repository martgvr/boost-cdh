import React from "react";
import './welcome.css'
import NavBar from "../NavBar/NavBar";

function Welcome() {
  return (
    <>
      <NavBar />
      <div className="welcome">
        <img src="./cloud2.png" alt="" className="cloud2"/>
        <img src="./cloud1.png" alt="" className="cloud1"/>
        <img src="./rocket.png" alt="" className="rocket"/>
        <p className="text1">Despegamos con tus mejores ideas y aterrizamos haciéndolas realidad.</p>
      </div>
    </>
  );
}

export default Welcome;
