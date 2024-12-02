import React, { useState } from 'react';
import './App.css'
import AccordionItem from './AccordionItem';
import data from './data';
import AccordionSingleItem from './AccordionSingleItem';

function Accordion() {
    const [curOpen,setCurOpen]=useState(null);
  return (
    <div className="accordion-container">
        <h3 className="faq">Frequently Asked Questions (FAQ's)</h3>
        {data.map((item,index)=>(
            <AccordionItem item={item} number={index}/>
        ))}
        <h3 className="faq">-------------------</h3>
        {data.map((item,index)=>(
            <AccordionSingleItem question={item.question} number={index}
            curOpen={curOpen}
            onOpen={setCurOpen}
            >{item.answer}</AccordionSingleItem>
        ))}
   
    </div>
  )
}

export default Accordion
