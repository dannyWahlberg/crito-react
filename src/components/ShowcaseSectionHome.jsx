import React from 'react'

import img_showcase from '@images/showcase-img.svg'
import showcase_waves from '@images/showcase-waves.svg'

const ShowcaseSectionHome = () => {
  return (
    <section className="showcase">
    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a className="btn-yellow" href="consulting.html">Get Consulting<i
                    className="fa-regular fa-arrow-up-right"></i></a>
            <a className="btn-transparent" href="services.html">Learn More<i
                    className="fa-regular fa-arrow-up-right"></i></a>
            <img className="showcase-waves" src={showcase_waves} alt="" />


        </div>
        <img src={img_showcase} alt="Buisness man wearing suite and carrying a tablet" />
    </div>
</section>
  )
}

export default ShowcaseSectionHome