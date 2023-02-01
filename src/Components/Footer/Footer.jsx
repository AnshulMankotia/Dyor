import React from 'react'
import './Footer.css'
import logo2 from '../../images/logo2.svg'
import logo1 from '../../images/logo1.svg'
import heart from '../../images/heart.svg'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer flex-row">
                <div className="f-left flex-column">
                    <div className="f-logo">
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                    </div>
                    <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                    <div className="subscribe">
                    <input type="text" /><span><button>Subsribe</button></span>
                    </div>
                </div>

                    <div className="gradient">

                    </div>

                <div className="f-right flex-row">
                        <nav className="l-content">
                            <ul className='foot-Links flex-column'>
                                <li> <a href="/#"> Menu</a></li>
                                <li> <a href="/#"> About</a></li>
                                <li> <a href="/#"> Products</a></li>
                                <li> <a href="/#"> FAQs</a></li>
                            </ul>
                        </nav>
                    <nav className="r-content">
                    <ul className='foot-Links flex-column'>
                                <li> <a href="/#"> Social Links</a></li>
                                <li> <a href="/#"> Twitter</a></li>
                                <li> <a href="/#"> Discord</a></li>
                                <li> <a href="/#"> Instagram</a></li>
                            </ul>
                    </nav>
                </div>
            </div>
                 <hr/>
        <div className="licence">
            <div className="copyright">
            <p>&#169; Dyor. All Rights Reserved 2023. Licencing</p>
            </div>
            <div className="fanatic">
             <p>
                Crafted with <span><img src={heart} alt="" /></span> By fanaticcoders
             </p>
            </div>
        </div>
        </div>

    </footer>
  )
}

export default Footer