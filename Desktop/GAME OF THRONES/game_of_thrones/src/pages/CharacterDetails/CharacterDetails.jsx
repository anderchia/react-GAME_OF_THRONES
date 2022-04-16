import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CardCharacterDetails from "../../components/CardCharacterDetails/CardCharacterDetails";
import Casa from "../../components/Casa/Casa";
import GoBack from "../../components/GoBack/GoBack";
import Traductor from "../../components/Traductor/Traductor";


export default function CharacterDetails() {
  const url = "https://api.got.show/api/show/characters/";
  const [characterDetail, setCharacterDetail] = useState();
  let { name } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      const res = await axios.get(`${url}/${name}`);
      setCharacterDetail(res.data);
    };

    getCharacter();
  }, [name]);

  return (
    characterDetail && (
      <div className="cajaGrande">
        <Casa />
        <GoBack />
        <Traductor/>
     
        <CardCharacterDetails character={characterDetail} />
      </div>
    )
  );
}
