import React from 'react'
import "./LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <div>
      <div className='loginsignup'>
        <div className='loginsignup-container'>
          <h1>Sign Up</h1>
          <div className='loginsignup-fields'>
            <input type='text'  placeholder='your name'/>
            <input type='email' placeholder='Email adress' />
            <input type='password' placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Alredy have an account<span>Login here</span></p>
          <div className='loginsignup-agree'>
            <input type='checkbox' name="" id="" />
            <p>by containing , i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default LoginSignUp