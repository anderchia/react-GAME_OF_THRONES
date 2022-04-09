import React from "react";
import { Link, generatePath } from "react-router-dom";

export default function CardHouse({ house }) {
  return (
    <Link to={generatePath("/houses/:name", { name: house.name })}>
      <figure>
       {house.logoURL && (
        <div>
          <img src={house.logoURL} alt="{house.name}" />
          <h2>{house.name}</h2>
        </div>
       )}
      </figure>
     </Link>
  
  );
}
