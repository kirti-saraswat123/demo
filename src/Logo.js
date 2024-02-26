import { CiSearch } from "react-icons/ci";
import './App.css';


import React from 'react'

export default function Logo() {
  return (
    <div>
      <div className='logo'>
        <img  alt="" className='logoi'
        src='./image/logo.svg'></img>
        <div className="text">
        <input
          type="text"
          placeholder=" search product... "
          
        ></input>
        <CiSearch style={{
         position: 'relative',
         left: '-50px'

        }}/>
        </div>
      </div>
      
    </div>
  )
}
