import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
   if (!user){
    return <h1>UserName</h1>
   }else{
    return <h2>Welcome {user.userName}</h2>
   }
}

export default Profile
