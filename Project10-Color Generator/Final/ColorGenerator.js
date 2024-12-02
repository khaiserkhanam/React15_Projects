import React, { useState } from 'react'
import './App.css'

function ColorGenerator() {
    const [color,setColor]=useState('#000000');
    const generateColor=()=>{
        const randomColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;
        setColor(randomColor)
        
    }
  return (
  <div style={{backgroundColor:color,height:'100vh',textAlign:'center'}}>
    <h2>Color Generator</h2>
    <button onClick={generateColor}>Generate Color</button>
    <h3>{color}</h3>
  </div>
  )
}

export default ColorGenerator
