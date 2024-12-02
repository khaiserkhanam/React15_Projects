import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';

function Random() {
    const [product,setProduct]=useState([]);
    const [image,setImage]=useState(null);
    const [count,setCount]=useState(0);
    useEffect(()=>{
        getProduct()
    },[])
    async function getProduct(){
        try{
            const res=await fetch('https://fakestoreapi.com/products');
            const data=await res.json();
            const randomNum=Math.floor(Math.random()*data.length);
            const randomProduct=data[randomNum];
            setProduct(randomProduct.title);
            setImage(randomProduct.image)
        }catch(error){
            console.log('Failed to fetch the product',error);
            
        }
        setCount((count)=>count+1)
    }
  return (
    <div className="product-container">
        <h1>{product}</h1>
        <img src={image} alt="Image" />
       <Message count={count}/>
        <button onClick={getProduct}>Generate Random Product</button>
    </div>
  )
}

export default Random
