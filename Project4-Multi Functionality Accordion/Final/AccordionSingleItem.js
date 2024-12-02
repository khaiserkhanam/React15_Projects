import React, { useState } from 'react'

function AccordionSingleItem({question,number,curOpen,onOpen,children}) {
    // const [isOpen,setIsOpen]=useState(false);
    const isOpen=number===curOpen;
    function handleToggle(){
        onOpen(isOpen?null:number)
    }
  return (
    <div className={`accordion ${isOpen?"active":""}`} onClick={handleToggle}>
        <div className="accordion-header">
            <span className="accordion-icon">{isOpen?"-":"+"}</span>
            <span className="accordion-number">{number<9?`0${number+1}`:number+1}</span>
            <span className="accordion-title">{question}</span>
        </div>
       { isOpen && <div className="accordion-content">
            <p>{children}</p>
        </div>}
    </div>
  )
}

export default AccordionSingleItem
