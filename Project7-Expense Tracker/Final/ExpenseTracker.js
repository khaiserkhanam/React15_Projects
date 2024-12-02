import React, { useState } from 'react';
import './App.css';

function ExpenseTracker() {
    const [expense,setExpense]=useState("");
    const [amount,setAmount]=useState("");
    const [expenses,setExpenses]=useState([]);
    const addExpense=()=>{
        if(expense && amount){
        setExpenses([...expenses,{expense,amount:parseFloat(amount)}]);
        console.log(expenses);
        setExpense('');
        setAmount('')
        }
        
    }
    const deleteExpense=(index)=>{
        setExpenses(expenses.filter((_,i)=>i!==index));
    }
  return (
    <div className="container">
        <h2 className="header">Expense Tracker</h2>
        <div className="inputContainer">
            <input type="text"
            placeholder='Expense' 
            className='input'
            value={expense}
            onChange={(e)=>setExpense(e.target.value)}
            />
              <input type="number"
            placeholder='Amount' 
            className='input'
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            />
            <button className="button" onClick={addExpense}>Add</button>
        </div>
        <ul className="expenseList">
           {expenses.map((item,index)=>(
            <li className="expenseItem" key={index}>
                <span>{item.expense}</span>
                <span>${item.amount.toFixed(2)}</span>
                <button className="deleteButton" onClick={()=>deleteExpense(index)}>Delete</button>
            </li>
           )) 
            }
        </ul>
        <h3 className="total">Total: ${expenses.reduce((total,item)=>total+item.amount,0).toFixed(2)}</h3>
    </div>
  )
}

export default ExpenseTracker
