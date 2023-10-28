import React from 'react'
import contact_box_one from '@images/contact-box-one.svg'
import contact_box_two from '@images/contact-box-two.svg'
import contact_box_three from '@images/contact-box-three.svg'
import map_image from '@images/map-image.svg'

const ContactUsSection = () => {
  return (
    <section className="contact-us-content">

    <div className="container">

        <div className="information-box one border">
            <div>
                <img src={contact_box_one} alt="location dart image" />
            </div>
           <div className="text">
            <p className="big-para" >Visit us</p>
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

        <div className="big-contact-box">

            <h3>Leave us a message for any information.</h3>
            
            <form action="#" className="contact-form" method="post">
                
                <input tabIndex="1" type="text" id="name" name="name" required placeholder="Name*" />
        
                
                <input tabIndex="2" type="email" id="email" name="email" required placeholder="Email*" />
        
                
                <textarea tabIndex="3" id="message" name="message" rows="4" required placeholder="Your Message*"></textarea>
        
                
                <button tabIndex="4" className="submit-btn" type="submit">
                    Send Message <i className="fa-regular fa-arrow-up-right"></i>
                </button>

            </form>

        </div>

    </div>

    <div className="map-location">
        <img src={map_image} alt="" />
    </div>

</section>
  )
}

export default ContactUsSection