import React from 'react'
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div>
        <div className='newsLetter'>
            <h1>Get Exclusive offers on your email</h1>
            <p>subscribe to our newsLetter and stay updated</p>
            <div>
                <input type='email' placeholder='Your Email Id' />
                <button>subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter