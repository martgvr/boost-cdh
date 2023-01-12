import React from "react";
import Button from "../Button/Button";
import "./pricecard.css";

function PriceCard({ title, price, services, color }) {
  return (
    <div className="price__card">
        <div className="price__card--header" style={{ backgroundColor: color }}></div>
        <div className="price__card--content">
            <h2>{title}</h2>
            <div className="price__card--price">
                <p>{price}</p>
                <p>/mes</p>
            </div>
            <ul className="price__card--list">
                { services.map(service => <li key={service}><img src="item.png" alt="" />{service}</li>) }
            </ul>
            <Button text={"Más información"} />
        </div>
    </div>
  );
}

export default PriceCard;
