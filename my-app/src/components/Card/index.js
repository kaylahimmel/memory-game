import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
    <span onClick={() => props.gamePiece(props.id)} className="score">
      <div className="img-container">
        <img alt={props.alt} src={props.image} />
      </div>
      
        
      </span>
    </div>
  );
}

export default Card;
