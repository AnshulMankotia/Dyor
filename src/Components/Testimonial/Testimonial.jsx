import React from 'react'
import Get from '../GetButton/Get'
import './Testimonial.css'
import tweeter from '../../images/tweeter.svg'
import avatar from '../../images/avatar.svg'

const Testimonial = () => {
  return (
    <section className="section5">
            <div className="container">
                <div className="testimonial">
                    <div className="t-heading">
                        <h3>Testimonial</h3>
                        <h2>
                        Transparent and honest feedback <br /> from our community
                        </h2>
                        <p>
                        Get an unfiltered look at what our customers have <br /> to say about their experience with us
                        </p>
                        
                        <div className="button">
                            <Get/>
                        </div>

                        
                    </div>
                </div>
                    <div className="t-grid grid-row">
                  <div className="column" id="column1">
                    <div className="t-content flex-column">
                      <div className="t-content1 flex-row">
                        <div className="image">
                        <img src={avatar} alt="" />
                        <span>Sam Houston <br /> 
                        <span className='idName'>@sam_houston</span>
                        </span>
                        </div>
                        <img src={tweeter} alt="" />
                      </div>
                      <div className="t-content2">
                        <p>"Just used @dyor for the first time and I am blown away by the quality of service and the Investment suggestions! Will definitely be a returning customer #happycustomer #greatservice"</p>
                      </div>
                    </div>
                  </div>
                  <div className="column" id="column2">
                  <div className="t-content flex-column">
                      <div className="t-content1 flex-row">
                        <div className="image">
                        <img src={avatar} alt="" /><span>Sam Houston <br /> <span className='idName'>@sam_houston</span></span>
                        </div>
                        <img src={tweeter} alt="" />
                      </div>
                      <div className="t-content2">
                        <p>"Just used @dyor for the first time and I am blown away by the quality of service and the Investment suggestions! Will definitely be a returning customer #happycustomer #greatservice"</p>
                      </div>
                    </div>
                  </div>
                  <div className="column" id="column3">
                  <div className="t-content flex-column">
                      <div className="t-content1 flex-row">
                        <div className="image">
                        <img src={avatar} alt="" /><span>Sam Houston <br /> <span className='idName'>@sam_houston</span></span>
                        </div>
                        <img src={tweeter} alt="" />
                      </div>
                      <div className="t-content2">
                        <p>"Just used @dyor for the first time and I am blown away by the quality of service and the Investment suggestions! Will definitely be a returning customer #happycustomer #greatservice"</p>
                      </div>
                    </div>
                  </div>
                  <div className="column" id="column4">
                  <div className="t-content flex-column">
                      <div className="t-content1 flex-row">
                        <div className="image">
                        <img src={avatar} alt="" /><span>Sam Houston <br /> <span className='idName'>@sam_houston</span></span>
                        </div>
                        <img src={tweeter} alt="" />
                      </div>
                      <div className="t-content2">
                        <p>"Just used @dyor for the first time and I am blown away by the quality of service and the Investment suggestions! Will definitely be a returning customer #happycustomer #greatservice"</p>
                      </div>
                    </div>
                  </div>
                  <div className="column" id="column5">
                  <div className="t-content flex-column">
                      <div className="t-content1 flex-row">
                        <div className="image">
                        <img src={avatar} alt="" /><span>Sam Houston <br /> <span className='idName'>@sam_houston</span></span>
                        </div>
                        <img src={tweeter} alt="" />
                      </div>
                      <div className="t-content2">
                        <p>"Just used @dyor for the first time and I am blown away by the quality of service and the Investment suggestions! Will definitely be a returning customer #happycustomer #greatservice"</p>
                      </div>
                    </div>
                  </div>
                  <div className="column" id="column6">
                  <div className="t-content flex-column">
                      <div className="t-content1 flex-row">
                        <div className="image">
                        <img src={avatar} alt="" /><span>Sam Houston <br /> <span className='idName'>@sam_houston</span></span>
                        </div>
                        <img src={tweeter} alt="" />
                      </div>
                      <div className="t-content2">
                        <p>"Just used @dyor for the first time and I am blown away by the quality of service and the Investment suggestions! Will definitely be a returning customer #happycustomer #greatservice"</p>
                      </div>
                    </div>
                  </div>
                  <div className="column" id="column7">
                  <div className="t-content flex-column">
                      <div className="t-content1 flex-row">
                        <div className="image">
                        <img src={avatar} alt="" /><span>Sam Houston <br /> <span className='idName'>@sam_houston</span></span>
                        </div>
                        <img src={tweeter} alt="" />
                      </div>
                      <div className="t-content2">
                        <p>"Just used @dyor for the first time and I am blown away by the quality of service and the Investment suggestions! Will definitely be a returning customer #happycustomer #greatservice"</p>
                      </div>
                    </div>
                  </div>
                  <div className="column" id="column8">
                  <div className="t-content flex-column">
                      <div className="t-content1 flex-row">
                        <div className="image">
                        <img src={avatar} alt="" /><span>Sam Houston <br /> <span className='idName'>@sam_houston</span></span>
                        </div>
                        <img src={tweeter} alt="" />
                      </div>
                      <div className="t-content2">
                        <p>"Just used @dyor for the first time and I am blown away by the quality of service and the Investment suggestions! Will definitely be a returning customer #happycustomer #greatservice"</p>
                      </div>
                    </div>
                  </div>
                  <div className="column" id="column9">
                  <div className="t-content flex-column">
                      <div className="t-content1 flex-row">
                        <div className="image">
                        <img src={avatar} alt="" /><span>Sam Houston <br /> <span className='idName'>@sam_houston</span></span>
                        </div>
                        <img src={tweeter} alt="" />
                      </div>
                      <div className="t-content2">
                        <p>"Just used @dyor for the first time and I am blown away by the quality of service and the Investment suggestions! Will definitely be a returning customer #happycustomer #greatservice"</p>
                      </div>
                    </div>
                  </div>
                  <div className='gradient'>
                    
                  </div>
                </div>
                
            </div>
        </section>
  )
}

export default Testimonial