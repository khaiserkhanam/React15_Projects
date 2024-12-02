import React, { useEffect, useState } from 'react';
import './App.css';
import { mockQuestions } from './data';

function Quiz() {
    const [questions,setQuestions]=useState([]);
    const [loading,setLoading]=useState(true);
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [selectedAnswer,setSelectedAnswer]=useState(null);
    const [showAnswer,setShowAnswer]=useState(false);
    const [score,setScore]=useState(0);
    const handleAnswerClick=(answer)=>{
        setSelectedAnswer(answer);
        setShowAnswer(true);
        if(answer===questions[currentQuestion].correct_answer){
            setScore((prev)=>prev+1)
        }
        setTimeout(()=>{
            setSelectedAnswer(null);
            setShowAnswer(false);
            setCurrentQuestion((prev)=>prev+1)
        },1500)
    }
    useEffect(()=>{
        const fetchQuestions=async()=>{
            try{
                const res=await fetch('https://opentdb.com/api.php?amount=10');
                if(!res.ok) throw new Error("Too many request")
                const data=await res.json();
                // console.log(data.results);
                setQuestions(data.results);
                setLoading(false)
            }catch(error){
                console.log("Error Fetching questions,using mock data",error);
                setQuestions(mockQuestions)
                setLoading(false)
            }
        }
        fetchQuestions();
    },[]);
 
    if(loading){
        return <h3>Loading Questions...</h3>
    }
    if(currentQuestion>=questions.length){
        return(
            <div className="quiz-container">
                <h2 className="quiz-header">Quiz Quest</h2>
                <h3 className="final-score">Your Final Score : {score}/{questions.length}</h3>
                <button className='restart-button' onClick={()=>window.location.reload()}>Restart Quiz</button>
            </div>
        )
    }
    const question=questions[currentQuestion];
    const answers=[...question.incorrect_answers,question.correct_answer].sort(()=>Math.random()-0.5);
    
  return (
   <div className="quiz-container">
    <h2 className="quiz-header">Quiz Quest</h2>
    <h3 className="score-display">Score : {score}</h3>
    <p className="question-text">{question.question}</p>
    <div className="answers-container">
        {answers.map((answer,index)=>(
            <button key={index} className={`answer-button ${showAnswer?(answer===question.correct_answer?'correct':answer===selectedAnswer?'incorrect':""):""}`} onClick={()=>handleAnswerClick(answer)} 
            disabled={showAnswer}
            >{answer}</button>  
        ))}
    </div>
    {showAnswer && (
    <p className={`feedback ${selectedAnswer===question.correct_answer?'correct-text':'incorrect-text'}`}>
        {selectedAnswer===question.correct_answer?'Correct!':'Wrong Answer'}
    </p>
    )}
   </div>
  )
}

export default Quiz
