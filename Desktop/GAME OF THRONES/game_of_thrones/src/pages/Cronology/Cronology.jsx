import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Cronology.scss'
import Cronologyasc from '../../components/Cronologies/Cronologyasc'
import Cronologydesc from '../../components/Cronologies/Cronologydesc'




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

        // document.getElementById('asc').onclick = () => {
        //   const ascList = characters.filter(character=> character.age.age).sort((prev, next) => {
        //     return prev.age.age - next.age.age;
        //   });
          
        //   characters(ascList);
        // }
   
        const [showCronology, setShowCronology] = useState(true);
       

      return (
        <div>
        
        <button id="asc" onClick={() => setShowCronology(true)}>Ascending</button>
        <button id="asc" onClick={() => setShowCronology(false)}>Descending</button>
        {showCronology ? (
          <Cronologyasc characters={characters}/>
        ) : (
          <Cronologydesc characters={characters}/>
        )}
      
        <ul>
          {characters.filter(character => character.age && character.age.age)
            .sort((prev, next) => prev.age.age - next.age.age)
            .map(character => (
              <li key={character.id}>
             
              <p>{character.age.age}</p>
              <p>{character.age.name}</p>
                 {character.image && <img src={character.image} alt="personajes" ></img>} 
          
              </li>
            ))}
        </ul>
      </div>
    )
  }