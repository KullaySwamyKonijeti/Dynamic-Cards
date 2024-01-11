import React from "react";
import "./card.css";

const Card = (i) => {
  return (
    <div className="card">
      <h2>{i?.i?.heading}</h2>
      <p>{i?.i?.paragraph}</p>
    </div>
  );
};

export default Card;
