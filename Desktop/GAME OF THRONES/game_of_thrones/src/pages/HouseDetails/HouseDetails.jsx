import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CardHouseDetails from "../../components/CardHouseDetails/CardHouseDetails";
import Casa from "../../components/Casa/Casa";
import GoBack from "../../components/GoBack/GoBack";


export default function HouseDetails() {
  const url = "https://api.got.show/api/show/houses";
  const [houseDetail, setHouseDetail] = useState("");
  let { name } = useParams();

  useEffect(() => {
    const getHouse = async () => {
      const res = await axios.get(`${url}/${name}`);
      console.log(res.data);
      setHouseDetail(res.data[0]);
    };
    getHouse();
  }, [name]);

  return (
    <div>
      <GoBack />
      <div>
        <Casa />
      </div>
     
      <CardHouseDetails house={houseDetail} />
    </div>
  );
}
