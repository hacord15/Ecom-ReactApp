import React from 'react'
import './CSS/LoginSignup.css'


const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Enter Your Email' />
          <input type="password" placeholder='Password' />

        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already hav an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
