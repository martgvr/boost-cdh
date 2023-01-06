import React from "react";
import './subheadercard.css'
import Button from "../Button/Button";

function SubheaderCard({ title }) {
  return (
    <div className="subheader__card">
      <div className="subheader__card--title">{title}</div>
      <Button text={"Más información"} />
    </div>
  );
}

export default SubheaderCard;
