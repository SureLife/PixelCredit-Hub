import React from 'react'
import "./ContactUs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';



function ContactUs() {

  function handleSubmit(event) {
    event.preventDefault();
   console.log(e.target.email.value);
  }

  return (
    <div>

   <h1>Reach Out and Connect</h1>

 
    <div className="contactbackground">
   
    <div className="contact-form">

<div>
      <form  onSubmit={handleSubmit} method="POST">
      <div className='name'>
          <input type="firstName" placeholder="YourName" name="firstName" />
        </div>
        <div className='email'>
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div className='massage'>
          <textarea placeholder="Your message" name="message" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
<div className='image'>
<img src="https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="no picture" />
</div>
    </div>
    <p className="sticker"><FontAwesomeIcon icon={faPhone} /> +1-2345-6789</p>
  <p className="sticker"><FontAwesomeIcon icon={faEnvelope} /> pixelcredithub@gmail.com</p>
  <p className="sticker"><FontAwesomeIcon icon={faMapMarker} /> 123 Ave, Germany, Berlin</p>
    </div>
    
    </div>
  )
}

export default ContactUs