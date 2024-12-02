import React, { useEffect, useState } from 'react';
import './App.css'

function CountdownTimer() {
    const [time,setTime]=useState(0);
    useEffect(()=>{
       const timer= setInterval(()=>{
            if(time>0){
                setTime((prevTime)=>prevTime-1)
            }
        },1000);
        return ()=>clearInterval(timer)
    },[time]);
  return (
  <div className="timer-container">
    <h2 className="timer-header">Countdown timer</h2>
    <div className="input-container">
        <input type="number" className="timer-input" placeholder="Set time in seconds"
        onChange={(e)=>setTime(parseInt(e.target.value))}
        />
    </div>
    <h3 className="time-display">{time} Seconds Remaining</h3>
  </div>
  )
}

export default CountdownTimer
