import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./CardHouse.scss"

export default function CardHouse({ house }) {
  return (
    <Link to={generatePath("/houses/:name", { name: house.name })}>
      <figure>
       {house.logoURL && (
        <div  className="caja cajaCasas">
          <img className="imagen imagenCasa" src={house.logoURL} alt="{house.name}" />
          <span className="houses">
          <h3 className="titulosCasas">{house.name}</h3>
          </span>
        </div>
       )}
      </figure>
     </Link>
  
  );
}
