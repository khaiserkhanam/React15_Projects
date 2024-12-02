import React, { useState } from 'react';
import './App.css'

function MultiStepForm() {
    const [step,setStep]=useState(1);
    const [isSubmitted,setIsSubmitted]=useState(false);
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        address:"",
        country:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const nextStep=()=>{
        setStep((step)=>step+1)
    }
    const prevStep=()=>{
        setStep((step)=>step-1)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsSubmitted(true);
    }

if(isSubmitted){
    return(
        <div className="submitted">
            <div className="submit-success">
                <h1>Form Submitted Successfully</h1>
                <h2>Entered Details</h2>
                <ul>
                    <li><strong>Name: </strong>{formData.name}</li>
                    <li><strong>Email: </strong>{formData.email}</li>
                    <li><strong>Address: </strong>{formData.address}</li>
                    <li><strong>Country: </strong>{formData.country}</li>
                </ul>
            </div>
        </div>
    )
} 
  return (
  <div className="multi-step-form-container">
    <h1>Multi Step Form</h1>
    <form onSubmit={handleSubmit}>
        {step ==1 && (<div>
            <h2>Step {step}: Personal Information</h2>
            <label>Name: </label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange}/>
            <button type="button" onClick={nextStep}>Next</button>
        </div>)
        }

       { step===2 && (<div>
            <h2>Step {step}: Contact Information</h2>
            <label>Email: </label>
            <input type="email" name="email" required value={formData.email}
            onChange={handleChange}
            />
            <button type="button" onClick={nextStep}>Next</button>
            <button type="button" onClick={prevStep}>Back</button>
        </div>)}

       {step===3 && ( <div>
            <h2>Step {step}: Address Information</h2>
            <label>Address: </label>
            <input type="text" name="address" required value={formData.address}
            onChange={handleChange}
            />
            <button type="button" onClick={nextStep}>Next</button>
            <button type="button" onClick={prevStep}>Back</button>
        </div>)
}
        {step===4 && (<div>
            <h2>Step {step}: Country</h2>
            <label>Country: </label>
            <input type="text" name="country" required value={formData.country}
            onChange={handleChange}
            />
            <button type="button" onClick={prevStep}>Back</button>
            <button type="submit">Submit</button>
        </div>)}
    </form>
  </div>
  )
}

export default MultiStepForm
