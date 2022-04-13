import React, { useEffect, useState } from "react";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
// import { GoTcontext } from "../../contexts/GoTcontext";
import Search from "../../components/Search/Search";
import axios from "axios";



export default function Characters() {
  // const {characters, setCharacters, fetchCharacters} = useContext(GoTcontext); //traer contexto para que no choque con la búsqueda
  const url = 'https://api.got.show/api/show/characters/'
  const [characters, setCharacters] = useState([]);
  
    const fetchCharacters = async (name="") => {
      const res = await axios.get(`${url}/${name}`);

      setCharacters(res.data);
    };

useEffect(() => {
    fetchCharacters();
  }, []);

  console.log("me ejecuto muchoo");

  return (
    <div>
      <div>
        <Search onSubmit={(data)=> fetchCharacters(data.data.name.length !== 0 ? data.data.name : ""
            )}/>
      </div>
     
      <div>
        {characters.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </div>
     
    </div>
  );
}
