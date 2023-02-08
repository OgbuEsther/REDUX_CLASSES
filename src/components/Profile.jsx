import React from 'react'
import { useSelector } from 'react-redux'



const Profile = () => {
    const user = useSelector((state) => state.ReduxState.current)
  return (
    <div>
        <h2>User</h2>
        <div>UserName : {user?.username} </div>
        <div>age : {user?.age} </div>
        <div>email : {user?.email} </div>
        <div>stack :{user?.stack} </div>
    </div>
  )
}

export default Profile