
import React from 'react'



export default function Cronology({characters}) {
    
      return (
       
        <ul>
          {characters.filter(character => character.age && character.age.age)
            .sort((prev, next) => next.age.age - prev.age.age)
            .map(character => (
              <li key={character.id}>
             
              <p>{character.age.age}</p>
              <p>{character.age.name}</p>
                 {character.image && <img src={character.image} alt="personajes" ></img>} 
          
              </li>
            ))}
        </ul>
    
    )
  }