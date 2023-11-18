import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import SuccessMessage from './SuccessMessage'

const Submitform = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [error, setError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  

  
  


  const handleSubmit = async (e) => {
    e.preventDefault()
   


    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    if (name.length < 2 || email.length < 2 || message.length < 2) {
      setError('Please enter more than 1 character for all fields.');
      return;
    }

    

    const userMessage = {name,email,message}
    const json = JSON.stringify(userMessage)
    

    const result = await fetch("https://win23-assignment.azurewebsites.net/api/contactform", {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: json
    })

    clearForm()
    
    if (result.status === 200) {
      
      setError('');
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      console.log(result.status)
    } else {

      alert('something went wrong')
    }

  }

    const clearForm = () => {

      setName('')
      setEmail('')
      setMessage('')

    }


  return (

    <div className='container signup-form'>
   
    <form onSubmit={handleSubmit} noValidate>
       
        <h1>Leave us a message <br /> for any information</h1>

        <ErrorMessage error={error} />
        
        <div className="signup-box">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name*' tabIndex={1} />
        </div>
        <div className="signup-box">
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email*' tabIndex={2} />
        </div>
        <div className="message-box">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message*' tabIndex={3} />
        </div>
        <button type='submit' tabIndex={4} className='submit-btn'>Send Message <i className="fa-regular fa-arrow-up-right"></i></button>


    </form>

    {showSuccessMessage && <SuccessMessage message="Your message was sent successfully!" />}
    </div>
  )
}

export default Submitform