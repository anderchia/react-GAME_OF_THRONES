import React, { useState, useEffect } from "react";
import CardHouse from "../../components/CardHouse/CardHouse";
import Search from "../../components/Search/Search";
import axios from "axios";
import Casa from "../../components/Casa/Casa";


export default function Houses() {
  const [houses, setHouses] = useState([]);
  const url = "https://api.got.show/api/show/houses/";

  const fetchHouses = async () => {
    const res = await axios.get(`${url}`);

    setHouses(res.data);
  };

  const searchHouse = async (name = "") => {
    // if (!name) {
    //   return fetchCharacters()
    // }
    const res = await axios.get(`${url}${name}`);

    setHouses([res.data]);
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <div className="cajaGrande">
      <div>
        <Search onSubmit={(data) => searchHouse(data.title)} />
      </div>
      <div>
        <Casa />
      </div>
     
      <div className="timeline-container">
        {houses.map((house) => (
          <CardHouse key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
}
