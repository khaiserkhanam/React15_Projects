import React, { useState } from 'react';
import './App.css'

function AuthenticationSystem() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const handleLogin=(e)=>{
            e.preventDefault();
            if(username==='Khanam' && password==='password'){
                setIsAuthenticated(true);
            }else{
                alert('Invalid Credentials');
                setUsername("");
                setPassword("")
            }
    }
    const handleLogout=()=>{
        setIsAuthenticated(false);
        setUsername("");
        setPassword("")
    }
  return (
    <div className="authentication-container">
        <h1>Authentication System</h1>
       { !isAuthenticated?(<form className="authentication-form" onSubmit={handleLogin}>
            <div>
                <label>Username</label>
                <input type="text" required 
                value={username} 
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" required 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <button>Login</button>
        </form>):(
            <div className="welcome-container">
                <h2>Welcome, {username}</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
        
    }
    </div>
  )
}

export default AuthenticationSystem
