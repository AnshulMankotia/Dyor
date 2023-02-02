import React from 'react'
import './Header.css'
import logo from '../../images/logo2.svg'

const Contact = () => {
  return (
    <header className='header2'>
      <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      </div>
    </header>
  )
}

export default Contact