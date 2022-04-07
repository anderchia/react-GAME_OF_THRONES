import React from 'react'

export default function CardCharacter({character}) {
  return (
    <figure>
    <div>
    <img src={character.image} alt="{character.name}"/>
    <h2>{character.name}</h2>
    </div>
  </figure>
   )
}


