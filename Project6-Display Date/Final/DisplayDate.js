import React, { useState } from 'react';
import './App.css';

function DisplayDate() {
    const [count,setCount]=useState(0);
    const [step,setStep]=useState(1);
    const date=new Date("November 23 2050");
    date.setDate(date.getDate()+count)
    function handleReset(){
        setCount(0);
        setStep(1)
    }
    
  return (
    <div className="container">
        <div className="step-container">
            <input type="range" min="0" max="10" className='range-input' value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
            <span className="step-label">Step:{step}</span>
        </div>
        <div className="counter-container">
            <button className="btn" onClick={()=>setCount((c)=>c-step)}>-</button>
            <input type="text" className="counter-input" value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
            <button className="btn" onClick={()=>setCount((c)=>c+step)}>+</button>
        </div>
        <p className="date-display">
            <span>
            {count===0?"Today is ": count>0 ?`${count} days from today is `:`${Math.abs(count)} days ago was `}
            </span>
            <span>{date.toDateString()}</span>
        </p>
       { count!==0 || step!==1?(<div>
            <button className="btn reset-btn" onClick={handleReset}>Reset</button>
        </div>):null}
    </div>
  )
}

export default DisplayDate
