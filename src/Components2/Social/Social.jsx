import React from 'react'
import './Social.css'
import mask from '../../images/mask2.svg'
import twitter2 from '../../images/twitter3.svg'
import instagram from '../../images/instagram2.svg'


const Social = () => {
  return (
    <section className="section2-2">
        <div className="container">
            <div className="social">
                <div className="social-media">
                    <h2>Follow us on social media</h2>
                    <p>Connect with our community of crypto enthusiasts and <br /> investors. Never miss a beat in the ever-changing world of <br /> cryptocurrency.</p>
                </div>
                <div className="cards">
                    <div className="card" id="card1">
                        <img src={mask} alt="" />
                        <span>Discord</span>
                        <span>Follow us</span>
                    </div>
                    <div className="card" id="card2">
                        <img src={twitter2} alt="" />
                        <span>Twitter</span>
                        <span>Follow us</span>
                    </div>
                    <div className="card" id="card3">
                        <img src={instagram} alt="" />
                        <span>Instagram</span>
                        <span>Follow us</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Social