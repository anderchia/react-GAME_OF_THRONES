import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardHouseDetails from '../../components/CardHouseDetails/CardHouseDetails';



export default function HouseDetails() {
  const url = 'https://api.got.show/api/show/houses'
  const [houseDetail, setHouseDetail] = useState("")
  let { name } = useParams();

  

  useEffect(() => {
    const getHouse = async () => {
      const res= await axios.get(`${url}/${name}`)
      console.log(res.data)
      setHouseDetail(res.data)
    }
    getHouse();
 
  }, [name])


  return (
    <CardHouseDetails house={houseDetail}/>

  )}

