import React from 'react'

function FriendList({friend}) {
    console.log(friend);
    
  return (
   <div className="friend-list">
   {friend.map((friendData)=>{
    const {id,name,image,age}=friendData;
    return(
            <div className="friend-card" key={id}>
            <img src={image} alt="Image" />
            <div>
            <h4>{name}</h4>
            <p>{age}</p>
            </div>
            </div>
    )
   }) 
    }
   </div>
  )
}

export default FriendList
