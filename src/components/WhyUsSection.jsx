import React from 'react'

import thumbs_img from '@images/thumbs-up.svg'
import diamond_img from '@images/diamond.svg'
import scale_img from '@images/scale.svg'
import cogwheel_img from '@images/cogwheel-brain.svg'
import women_tablet from '@images/women-with-tablet.png'

const WhyUsSection = () => {
  return (

    <section className="why-choose-us">

    <div className="grey-box"></div>

    <div className="container">

        <div className="text-content">

            <div className="section-title">

                <p> Why Choose Us </p>
                <h2> Why We Are The Best Business Consulting Agency </h2>
            </div>

            <a href="#">
                <div className="examples">

                    <img src={thumbs_img} alt="thumbs up image" />
                    <div>
                        <h3>Process Excellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="examples">
                    <img src={diamond_img} alt="diamond image" />
                    <div>
                        <h3>Strategic Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="examples">
                    <img src={scale_img} alt="image scale" />
                    <div>
                        <h3>Experience Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="examples">
                    <img src={cogwheel_img} alt="a head with a cogwheel in the center" />
                    <div>
                        <h3>Artificial Inteligence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </a>



        </div>
        <div className="image-content">

            <img src={women_tablet} alt="Two women with a tablet" />

        </div>




    </div>

</section>
  )
}

export default WhyUsSection