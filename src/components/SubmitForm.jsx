import React from 'react'

const Submitform = () => {







  return (

    <div className='container signup-form'>
   
    <form>
       
        <h1>Leave us a message <br /> for any information</h1>
        
        <div className="signup-box">
            <input type="text" placeholder='Name*' tabIndex={1} />
        </div>
        <div className="signup-box">
            <input type="text" placeholder='Email*' tabIndex={2} />
        </div>
        <div className="message-box">
            <input type="text" placeholder='Your Message*' tabIndex={3} />
        </div>
        <button tabIndex={4} className='submit-btn'>Send Message <i className="fa-regular fa-arrow-up-right"></i></button>


    </form>
    </div>
  )
}

export default Submitform