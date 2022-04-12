import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
import Search from "../../components/Search/Search";

export default function Characters() {
  const [characters, setCharacters] = useState([]); //traer contexto para que no choque con la búsqueda

  const getCharacters = async (characterName = "") => {
    const res = await axios.get(
      `https://api.got.show/api/show/characters/${characterName}`
    );

    console.log(res.data);
    setCharacters(res.data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  console.log(characters);

  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        {characters.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
