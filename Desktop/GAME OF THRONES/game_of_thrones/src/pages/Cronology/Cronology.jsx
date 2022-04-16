import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cronology.scss";
import Casa from "../../components/Casa/Casa";
import Navigator from "../../components/Navigator/Navigator";

export default function Cronology() {
  const [characters, setCharacters] = useState([]);
  const [showCronology, setShowCronology] = useState(false);

  const getCharacters = async () => {
    const res = await axios.get(`https://api.got.show/api/show/characters/`);

    console.log(res.data);
    setCharacters(res.data);
    // nada me asegura que characters ya este guardado
    filterChar(res.data);
  };

  const filterChar = (chars) => {
    setShowCronology(!showCronology);
    const charFilter = chars
      .filter((character) => character.age && character.age.age)
      .sort((prev, next) => {
        return showCronology
          ? next.age.age - prev.age.age
          : prev.age.age - next.age.age;
      });
    setCharacters(charFilter);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  console.log(characters);

  const pairChar = [];
  const oddChar = [];

  for (let i = 0; i < characters.length; i++) {
    if (i % 2 === 0) {
      pairChar.push(characters[i]);
    } else {
      oddChar.push(characters[i]);
    }
  }

  return (
    <div className="cajaGrande">
      <Casa />
      <Navigator />

      <section className="timeline-container">
        <div className="cajaGrandeCrono">
          <div className="left-box-big">
            <button
              id="asc"
              className="b-cronology"
              onClick={() => filterChar(characters)}
            >
              {pairChar[0] && pairChar[0].age.age}
            </button>
            <img
              src="/images/arrow.png"
              alt=""
              className={showCronology ? "flecha" : "flecha_reves"}
            />
            {pairChar.map((character) => (
              <div className="left-box-small" key={character.name}>
                {character.age && (
                  <p className="left-box-small_age">{character.age.age}</p>
                )}
                <p>{character.name}</p>
                <img
                  className="left-box-small_img"
                  src={character.image}
                  alt="img"
                />
              </div>
            ))}
          </div>
          <div className="right-box-big">
            {oddChar.map((character) => (
              <div className="right-box-small" key={character.name}>
                {character.age && (
                  <p className="right-box-small_age">{character.age.age}</p>
                )}
                <p>{character.name}</p>
                <img
                  className="right-box-small_img"
                  src={character.image}
                  alt="img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
