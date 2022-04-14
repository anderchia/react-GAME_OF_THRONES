import React from "react";
import { Link, generatePath } from "react-router-dom";


export default function CardCharacter({ character }) {
  return (
    <Link to={generatePath("/characters/:name", { name: character.name })}>
      {character.image && (
        <figure className="timeline-container" >
          <div>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        </figure>
      )}
    </Link>
  );
}
