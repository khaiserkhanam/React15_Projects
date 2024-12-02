import React, { useState } from 'react'
import quizQuestions from './data';
import './App.css'

function Study() {
    const [selectedId,setSelectedId]=useState(null);
    function handleClick(id){
        setSelectedId(id !==selectedId?id:"")
    }
  return (
    <div className="card-grid">
        {quizQuestions.map((ques)=>(
            <div className={`card ${ques.id===selectedId?"active":""}`}
            onClick={()=>handleClick(ques.id)}
            >
                {ques.id===selectedId?ques.answer:ques.question}
            </div>
        ))}
    </div>
  )
}

export default Study
