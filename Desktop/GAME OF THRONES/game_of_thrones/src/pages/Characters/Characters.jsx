import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardCharacter from '../../components/CardCharacter/CardCharacter'


export default function Characters() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
      const getCharacters = async () => {
        const res= await axios.get("https://api.got.show/api/show/characters/");
      
        console.log(res.data);
        setCharacters(res.data)
      
      }
      getCharacters();
    }, [])
  
    console.log(characters) 
  
  
      return (
        <div>
        {characters.map((character) => (
          <CardCharacter character={character}/>
        ))}
     </div>
    )
  }
  
  