import React from 'react'
import Join from '../JoinButton/Join'
import './Discover.css'
import mobileSlide from '../../images/mobile slab.svg'

const Discover = () => {
  return (
    <section className="section3">
        <div className="container">
            <div className="discover">
                <div className="l-side">
                  <h3>ABOUT US</h3>
                  <h2>Discover crypto with <br/> fundamentals potential</h2>
                  <p>Discover hidden gems in the crypto market <br/> through fundamentals analysis</p>
                  <div className="button">
                  <Join/>
                  </div>
                </div>
                <div className="r-side">
                   <img className='parentSlab' src={mobileSlide} alt="" />
                   <img className='childSlab' src={mobileSlide} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discover