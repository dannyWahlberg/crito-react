import React from 'react'

import handshake_logo from '@images/handshake-icon.svg'
import lightbulb_logo from '@images/lightbulb-icon.svg'
import chart_logo from '@images/chart-icon.svg'
import box_logo from '@images/box-icon.svg'


const FeaturesSection = () => {
  return (
    <section className="features">



    <div className="container">
        <div className="section-title">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
            <button className="btn-yellow">Learn More<i className="fa-regular fa-arrow-up-right"></i></button>
        </div>


        <div className="our-products">
            <img src={handshake_logo} alt="handshake icon" />
            <h3>Business Advice</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="our-products">
            <img src={lightbulb_logo} alt="lightbulb icon" />
            <h3>Startup Business</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="our-products">
            <img src={chart_logo} alt="charts icon" />
            <h3>Financial Advice</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="our-products">
            <img src={box_logo} alt="box with cogwheel icon" />
            <h3>Risk Management</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>

</section>
  )
}

export default FeaturesSection