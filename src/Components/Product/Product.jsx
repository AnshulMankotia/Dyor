import React from 'react'
import './Product.css'
import slide2 from '../../images/mobile slide2.svg'
import Join from '../JoinButton/Join'

const Product = () => {
  return (
    <section className="section3 product">
        <div className="container">
            <div className="about">
                <div className="l-side">
                  <h3>OUR PRODUCT</h3>
                  <h2>Join the Crypto <br/>Investment Revolution</h2>
                  <p>Download our app and get access to expertly <br /> handpicked crypto suggestions to help you make <br /> informed decisions and grow your portfolio.</p>
                  <div className="button">
                  <Join/>
                  </div>
                </div>
                <div className="r-side">
                   <img className='parentSlab' src={slide2} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product