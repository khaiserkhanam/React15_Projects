import React, { useState } from 'react'
import './App.css';
const images=[
    {src:'../../assets/Nature1.jpg',category:'Nature', title:'Nature Image1'},
    {src:'../../assets/Nature2.jpg',category:'Nature', title:'Nature Image2'},
    {src:'../../assets/Animal1.jpg',category:'Animals', title:'Animal Image1'},
    {src:'../../assets/Animal2.jpg',category:'Animals', title:'Animal Image2'},
    {src:'../../assets/Flower1.jpg',category:'Flower', title:'Flower Image1'},
    {src:'../../assets/Flower2.jpg',category:'Flower', title:'Flower Image2'},
]
function ImageGallery() {
    const [selectedCategory,setSelectedCategory]=useState("All");
    const filteredImages=selectedCategory==='All'?images:images.filter(img=>img.category===selectedCategory);
  return (
   <div className="image-gallery-container">
    <h2>Image Gallery</h2>
    <select className="category-select"
    value={selectedCategory}
    onChange={(e)=>setSelectedCategory(e.target.value)}
    >
        <option value="All">All</option>
        <option value="Nature">Nature</option>
        <option value="Animals">Animals</option>
        <option value="Flower">Flower</option>
    </select>
    <div className="image-gallery-grid">
       {filteredImages.map((img,index)=>(
        <div className="image-item" key={index}>
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
        </div>
       ))
        
        }
    </div>
   </div>
  )
}

export default ImageGallery
