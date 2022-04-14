import React, { useContext } from 'react'
import CardHouse from '../../components/CardHouse/CardHouse'
import { GoTcontext } from '../../contexts/GoTcontext'

export default function Houses() {
  const {houses} = useContext(GoTcontext)

    return (
      <div className="cajaGrande">
      <div className="timeline-container">
      {houses.map((house) => (
        <CardHouse key={house.id} house={house}/>
      ))}
   </div>
   </div>
  )
}



