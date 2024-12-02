import React, { useEffect, useState } from 'react';
import './App.css';

function ProjectSearch() {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [searchTerm,setSearchTerm]=useState("");
    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                    const res=await fetch('https://fakestoreapi.com/products');
                    const data=await res.json();
                    setProducts(data);
            }catch(error){
                console.log('Error fetching the products',error);
            }finally{
                setLoading(false)
            }
        }
        fetchProducts();
    },[])
    const filteredProducts=products.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase()))
if(loading){
    return <h3 className="message">Loading Products...</h3>
}
  return (
    <div className="product-search-container">
        <h2>Product Display</h2>
        <input 
        type="text"
        placeholder="Search for a products.." 
        className='search-input'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        {filteredProducts.length==0?(
            <h3 className="message">No products available</h3>
        ):(
            <div className="products-grid">
          {  filteredProducts.map((product)=>(
            <div className="product-card" key={product.id}>
            <h4>{product.title}</h4>
            <img src={product.image} alt="Product Image" />
            <p>Price ${product.price}</p>
            </div>
          ))}
        </div>
        )}
    </div>
  )
}

export default ProjectSearch
