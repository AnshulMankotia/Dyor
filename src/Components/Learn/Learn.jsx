import React from 'react'
import './Learn.css'
import mobileSlide from '../../images/mobile slab.svg'
import vector1 from '../../images/vector1.svg'
import vector2 from '../../images/vector2.svg'

const Learn = () => {
  return (
    <section className="section4">
        <div className="container">
            <div className="learn flex-row">
                <div className="l-side">
                   <img className='parentSlab' src={mobileSlide} alt="" />
                   <img className='childSlab1' src={mobileSlide} alt="" />
                   <img className='childSlab2' src={mobileSlide} alt="" />
                </div>
                <div className="r-side flex-column">
                    <div className="content1 flex-column">
                    <h2>More than you think</h2>
                  <p>Gain a competitive edge in the crypto market with <br /> a fundamentals-based strategy in a engaging and <br/> fun way</p>
                    </div>

                    <div className="content2 flex-row">
                        <div className="l-content flex-column">
                            <div className="icon">
                                <img src={vector1} alt="" /><span>Discovery Model</span>
                            </div>
                            <p>identifying and selecting <br /> cryptocurrencies that have <br /> the potential for long-term <br /> growth and success.</p>
                        </div>
                        <div className="r-content flex-column">
                        <div className="icon">
                                <img src={vector2} alt="" /><span>Learn to Earn</span>
                            </div>
                            <p>Learning approach that <br /> combines elements of gaming <br /> and earning rewards with <br /> educational content.</p>
                        </div>
                    </div>
                  

                </div>
            </div>
        </div>
    </section>
  )
}

export default Learn