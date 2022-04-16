import React, { useEffect, useState } from "react";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
// import { GoTcontext } from "../../contexts/GoTcontext";
import Search from "../../components/Search/Search";
import axios from "axios";
import "./Characters.scss";
import Casa from "../../components/Casa/Casa";
import Navigator from "../../components/Navigator/Navigator";



export default function Characters() {
  // const {characters, setCharacters, fetchCharacters} = useContext(GoTcontext); //traer contexto para que no choque con la búsqueda
  const url = "https://api.got.show/api/show/characters/";
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const res = await axios.get(`${url}`);

    setCharacters(res.data);
  };

  const searchCharacter = async (name = "") => {
    // if (!name) {
    //   return fetchCharacters()
    // }
    const res = await axios.get(`${url}${name}`);

    setCharacters([res.data]);
  };



  useEffect(() => {
    fetchCharacters();
  }, []);

  console.log("me ejecuto muchoo");

  return (
    <div className="cajaGrande">
      <div>
        <Search onSubmit={(data) => searchCharacter(data.title)} />
      </div>
      <div>
        <Casa/>
      </div>
      <div>
      <Navigator/>
      </div>
      <div className="timeline-container">
        {characters.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </div>
     
    </div>
  );
}

