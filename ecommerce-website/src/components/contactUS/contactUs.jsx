import React from 'react'
import './contactUs.css'

const ContactUs = () => {

  return (

    <div className="contactUs">

    <form >

       <div className="yourName">
        <label htmlFor="name">Your name</label>
        <input type="text" id='name'/>
       </div>
       
       <div className="YourEmail">
        <label htmlFor="email">Your email</label>
        <input type="text" id='email'/>
       </div>

       <div className="Subject">
        <label htmlFor="subject">Subject</label>
        <input type="text" id='subject'/>
       </div>

       <div className="YourMessage">
        <label htmlFor="message">Your message (optional)</label>
        <input type="text" id='message'/>
       </div>

       <button type="submit">Submit</button>


    </form>

    </div>
  )
}

export default ContactUs