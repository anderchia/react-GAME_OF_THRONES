import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./CardCharacter.scss";

export default function CardCharacter({ character }) {
  return (
    <Link to={generatePath("/characters/:name", { name: character.name })}>
      {character.image && (
        <figure>
          <div className="caja">
            <img
              className="imagen"
              src={character.image}
              alt={character.name}
            />
            <span className="fondoNombre">
              <h3 className="nombre">{character.name}</h3>
            </span>
          </div>
        </figure>
      )}
    </Link>
  );
}
