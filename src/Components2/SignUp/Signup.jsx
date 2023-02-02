import React, { useState } from 'react'
import './Signup.css'
import mobile from '../../images/mobile slide.svg'

const Signup = () => {
    const [checked, setChecked] =useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <section className="section1-1">
        <div className="container">
            <div className="sign-up flex-row">
             <div className="s-left">
                <p>Sign up now for early access</p>
                <h2>Join the waitlist,<br />gain the edge</h2>
                <p>Be the first to know about our handpicked crypto <br/> investment opportunities</p>
                <input type="text" placeholder='Enteryour email...' />
                <label><input type="checkbox" checked={checked} onChange={handleChange}/> By continuing you agree to the Dyor terms of service and privacy policy.</label>
                <button>Join The Waitlist</button>
             </div>
             <div className="s-right">
                <img src={mobile} alt="" />
             </div>
            </div>
        </div>
    </section>
  )
}

export default Signup