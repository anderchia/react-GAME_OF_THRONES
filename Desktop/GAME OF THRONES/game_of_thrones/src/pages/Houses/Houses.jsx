import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardHouse from '../../components/CardHouse/CardHouse'

export default function Houses() {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    const getHouses = async () => {
      const res= await axios.get("https://api.got.show/api/show/houses");
    
      console.log(res.data);
      setHouses(res.data)
    
    }
    getHouses();
  }, [])

  console.log(houses) 


    return (
      <div>
      {houses.map((house) => (
        <CardHouse key={house.id} house={house}/>
      ))}
   </div>
  )
}



