import React from 'react'
import { Link } from 'react-router-dom';
import './Navigator.scss'

export default function Navigator() {
  return (
    <>
     <ul className='c-nav'>
        <Link to ="/characters">PERSONAJES</Link> 
        <Link to ="/houses">CASAS</Link> 
        <Link to ="/cronology">CRONOLOGIA</Link> 
     </ul>
    </>
  )
}

