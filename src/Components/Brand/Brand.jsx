import React from 'react'
import './Brand.css'
import binance from '../../images/binance.svg'
import coinbase from '../../images/coinbase.svg'
import boat from '../../images/boat.svg'
import m from '../../images/m.svg'
import paypal from '../../images/paypal.svg'

const Brand = () => {
  return (
    <section className="section2">
        <div className="wrapper">
            <div className="brand">
                <div className="content">
                <div className="brand1"><img src={binance} alt="" /></div>
                <div className="brand2"><img src={coinbase} alt="" /></div>
                <div className="brand3"><img src={boat} alt="" /></div>
                <div className="brand4"><img src={m} alt="" /></div>
                <div className="brand5"><img src={paypal} alt="" /></div>
                </div>
        </div>
        </div>
    </section>
  )
}

export default Brand