import React from 'react'
import './userInfo.css'

function Userinfo() {
  return (
    <div className='userInfo'>
      <div className='user'>
        <img src="./avatar.png" alt="userImg" />
        <h2>User name</h2>
      </div>
      <div className='icons'>
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  )
}

export default Userinfo