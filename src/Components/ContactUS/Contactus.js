import React from 'react'
import './ContactStyle.css'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
const Contactus = () => {
  return (
    <div className='contact-bg'>
        <div className='contactPage'>
            <div className='contact-main'>
                <h1>Contact</h1>
                <p>Email:<span className='text-underline'>TravelTours34@gmail.com</span></p>
                <p>Phno:-189-678547223</p>
                <div className='social-medias'>
                  <p>Do Follow Us On </p>
                  <icon className='icon'><FaFacebookSquare/></icon>
                  <icon className='icon'><FaSquareXTwitter/></icon>
                  <icon className='icon'><FaInstagramSquare/></icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactus