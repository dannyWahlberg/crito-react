import React from 'react'

import lady_img from '@images/about-company-lady.png'

const AboutSection = () => {
  return (
    <section className="about-company">

    <div className="content container">
        <div className="about-image">
            <div className="blue-box">
                <div className="blue-box-content">
                    <div className="name-title">
                        <p className="name">Samantha Brown,</p>
                        <p className="title">Founder</p>
                    </div>

                    <div>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
            </div>
            <img src={lady_img} alt="a woman walking outside some offices" />
        </div>
        <div className="about-info">
            <div className="section-title">
                <p>About Company</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
            </div>
            <div className="content-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda
                    esse obcaecati? Ex esse error voluptates iure vel totam eos. </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt
                    adipisci accusantium libero provident voluptate amet.</p>
            </div>
            <div className="about-buttons">
                <a className="btn-black" href="#">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                <a href="https://www.youtube.com/watch?v=_2wARy-oevQ" target="_blank"><button
                        className="round-btn"><i className="fa-duotone fa-play"></i></button></a>
            </div>
        </div>


    </div>


</section>
  )
}

export default AboutSection