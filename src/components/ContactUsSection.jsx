import React from 'react'
import contact_box_one from '@images/contact-box-one.svg'
import contact_box_two from '@images/contact-box-two.svg'
import contact_box_three from '@images/contact-box-three.svg'
import map_image from '@images/map-image.svg'
import Submitform from './SubmitForm'

const ContactUsSection = () => {
  return (
    <section className="contact-us-content">

    <div className="container">

        <div className="information-box one border">
            <div>
                <img src={contact_box_one} alt="location dart image" />
            </div>
           <div className="text">
            <p className="big-para">Visit us</p>
            <p>Sveavägen 31</p>
            <p>111 34 STOCKHOLM</p>
        </div>
        
            
    </div>
        <div className="information-box two border">
           <div> 
            <img src={contact_box_two} alt="phone image" />
           </div>
        
            <div className="text">
            <p className="big-para" >Call Us</p>
            <p>+46 121470 50</p>
            <p>+46 121470 51</p>
        </div>
    </div>

        <div className="information-box three border">
           <div> 
            <img src={contact_box_three} alt="email image" />
           </div>

            <div className="text">
            <p className="big-para">Email us</p>
            <p>info@crito.com</p>
            <p>support@crito.com</p>
        </div>
        </div>
         <Submitform />

    </div>

    <div className="map-location">
        <img src={map_image} alt="" />
    </div>

</section>
  )
}

export default ContactUsSection