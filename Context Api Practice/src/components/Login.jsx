import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext';

function Login() {
    const [userName,setUserName]=useState('');
    const [password, setPassword]= useState('');
    const {setUser}= useContext(UserContext);
    const login=(evt)=>{
        evt.preventDefault()
       setUser({userName,password})
    }
    return (
        <div>
            <h1>Login Form</h1>
            <label htmlFor="UserName" >UserName</label>
            <input type="text" onChange={(evt)=>{
                setUserName(evt.target.value)
            }} />
            <br />
            <br />
            <label htmlFor="Password">Password</label>
            <input type="text" onChange={(evt)=>{
                setPassword(evt.target.value)
            }} />
            <br />
            <br />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login
