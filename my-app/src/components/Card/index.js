import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.alt} src={props.image} />
      </div>
      <span onClick={() => props.countCard(props.id)} className="score">
        𝘅
      </span>
    </div>
  );
}

export default Card;
