import React, { useState } from 'react'
import './SignUp.css'

function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')

  const handleSignUp = () => {
    // Add your sign up logic here
  }

  return (
    <div className='sign-up'>
      <h2>Sign Up</h2>
      <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type='tel' placeholder='Mobile Number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default SignUp

