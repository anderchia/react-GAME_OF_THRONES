import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cronology.scss";
import Cronologyasc from "../../components/Cronologies/Cronologyasc";
import Casa from "../../components/Casa/Casa";



export default function Cronology() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const res = await axios.get(`https://api.got.show/api/show/characters/`);

    console.log(res.data);
    setCharacters(res.data);
    // nada me asegura que characters ya este guardado
    filterChar(res.data);
  };

  const filterChar = (chars) => {
    setShowCronology(!showCronology);
    const charFilter=chars
      .filter((character) => character.age && character.age.age)
      .sort((prev, next) => {
        return showCronology
        ? next.age.age - prev.age.age
        : prev.age.age - next.age.age
      });
    setCharacters(charFilter);
  };

  useEffect(() => {
    getCharacters();
   
  }, []);

  console.log(characters);
 

  const [showCronology, setShowCronology] = useState(false);

  return (
    <div className="cajaGrande">
    <div>
        <Casa/>
      </div>
     
      <button id="asc" onClick={() => filterChar(characters)}>asc
      </button>
      <div className="timeline-container">

        <Cronologyasc characters={characters} />
   </div>
    </div>
  );
}
