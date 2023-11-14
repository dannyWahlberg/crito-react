import React, { useState } from 'react'

const Submitform = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

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

      alert('Tack för ditt meddelande')
    } else {

      alert ('Något gick fel')
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
    </div>
  )
}

export default Submitform