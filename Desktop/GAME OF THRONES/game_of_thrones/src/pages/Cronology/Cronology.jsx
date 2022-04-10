import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function Cronology() {
    const [characters, setCharacters] = useState([])
 
    const getCharacters = async () => {
        const res= await axios.get(`https://api.got.show/api/show/characters/`);
      
        console.log(res.data);
        setCharacters(res.data)
      
      }

    useEffect(() => {
      getCharacters();
    }, [])
  
    console.log(characters) 
  
  
      return (
        <div>
        <ul className='b-li'>
          {characters.filter(character => character.age && character.age.age)
            .sort((prev, next) => prev.age.age - next.age.age)
            .map(character => (
              <li key={character.id}>
                {character.image && <img src={character.image} alt="personajes" ></img>} {character.age.name} {character.age.age}
              </li>
            ))}
        </ul>
      </div>
    )
  }