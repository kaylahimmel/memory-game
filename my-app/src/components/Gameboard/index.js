import React from "react";
import "./Gameboard.css";

const Gameboard = props => (
  <ul className="list-group search-results">
    {props.results.map(result => (
      <li key={result} className="list-group-item">
        <img alt={result.alt} src={result} className="img-fluid" />
      </li>
    ))}
  </ul>
);

export default Gameboard;