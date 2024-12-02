import React, { useState } from 'react';
import './App.css'
import FriendList from './FriendList';
import { data } from './data';

function Friends() {
    const [friend,setFriend]=useState(data)
  return (
    <div className="friends-container">
        <h2>I have {friend.length} friends</h2>
        <FriendList friend={friend}/>
       { friend.length>0 ? (<button className="clear-button" onClick={()=>setFriend([])}>Clear All</button>):null}
    </div>
  )
}

export default Friends
