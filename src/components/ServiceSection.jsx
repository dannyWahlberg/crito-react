import React from 'react'

import waves_img_service from '@images/waves-our-services.svg'

const ServiceSection = () => {
  return (
    <section className="our-services">
    <div className="content container">
        <div className="section-title container">
            <p>Our Services</p>
            <h2>We Provide The Best<br />Service For Consulting </h2>
        </div>

        <div className="content-boxes container">
            <div className="white box border">
                <div className="bottom-border"></div>
                <h3>Business Advice</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.
                </p>
                <button className="round-btn"><i className="fa-regular fa-arrow-right"></i></button>

            </div>
            <div className="yellow box border">
                <div className="bottom-border"></div>
                <h3>Startup Business</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.
                </p>
                <button className="round-btn"><i className="fa-regular fa-arrow-right"></i></button>
            </div>
            <div className="white box border">
                <div className="bottom-border"></div>
                <h3>Financial Advice</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.
                </p>
                <button className="round-btn"><i className="fa-regular fa-arrow-right"></i></button>

            </div>
            <div className="white box border">
                <div className="bottom-border"></div>
                <h3>Risk Management</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.
                </p>
                <button className="round-btn"><i className="fa-regular fa-arrow-right"></i></button>

            </div>
        </div>
        <div className="btn-container">
            <a className="btn-black" href="#">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <div className="waves-image"> <img src={waves_img_service} alt="" />
        </div>
    </div>




</section>
  )
}

export default ServiceSection