import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { MdWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import Navbar from '../components/Navbar'
import {ReCAPTCHA} from 'react-google-recaptcha'
import { useState} from 'react'

const ContactUs = () => {
  const [captcha,setCaptcha] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!captcha){
      alert("Please verify your not Robot")
      return;
    }
  }

  return (
   <div className="contactus">
    <Navbar/>
     <section className="aboutus">
      <div className="container">
        <h1>Let's talk</h1>
        <h2>Connect With Us <span className="text-red-500">Lets Make <br/>a Change</span></h2>
        <h3>Reach out to us through any of our channel. We're always here to<br/>
        answer your questions, hear your ideas, and work together to <br/>
        change childrens lives and skills through your <span className="text-red-500 font-semibold">Donate ❤️</span></h3>
        <div className="cards">
          <div className="card loc">
            <div  className="icon-circle location">
              <FaLocationDot size={35} color="red"/>
            </div>
            <h className='font-bold text-lg'>Our Location</h>
            <p className="font-normal text-sm">Based in Namalere, Kagoma, Wakiso District, Uganda</p>
            <button className="btn-location theme-primary" type="button">Uganda </button>
          </div>
          <div className="card em">
            <div className="icon-circle email">
              <MdEmail size={35} color="blue"/>
            </div>
            <h className='font-bold text-lg'>Email Us</h>
            <p className="font-normal text-sm">send us an email and we'll get back to you in 24 hours</p>
            <button className="btn-email theme-primary" type="button">
              <MdEmail size={20} color="white"/>
              Send Email </button>
          </div>
          <div className="card ca">
            <div className="icon-circle call">
              <MdCall size={35} color="green"/>
            </div>
            <h className='font-bold text-lg'>Email Us</h>
            <p className="font-normal text-sm">Available for calls and Whatsapp messages. We're here to help you</p>
            <button className="btn-call theme-primary" type="button">
              <MdCall size={20} color="green"/>
              + 256 744999159
            </button>
            <button className="btn-whatsapp theme-primary" type="button">
              <MdWhatsapp size={20} color="white"/>
              WhatsApp Chat
            </button>
          </div>
          <div className="card sha">
            <div className="icon-circle share">
              <IoShareSocial size={35} color="orange"/>
            </div>
            <h className='font-bold text-lg'>Follow Us</h>
            <p className="font-normal text-sm">Stay updated with our latest activities, <br/>stories, and News</p>
            <div className="aboutus-links">
              <a className='icon-b bg-[#C24873]' href=""><FaInstagram size={15} color="white"/></a>
              <a className='icon-b bg-red-500' href=""><IoLogoTiktok size={15} color="black"/></a>
              <a className='icon-b bg-blue-700' href=""><FaFacebookF size={15} color="white"/></a>
              <a className='icon-b bg-orange-600' href=""><ImYoutube2 size={15} color="white"/></a>
            </div>
            <p className="font-light text-xs">@ugandayouthbrassband</p>
          </div>
        </div>
        <div>
          <section className="aboutus-feedback">
            <div className="container">
              <h className='font-bold text-black text-2xl'>Contact Us</h>
              <p>Let us know your questions, suggestions and concerns by 
                filling out the contact form below.
              </p>
              <form onSubmit={handleSubmit} className="form-field">
                <label for="fieldText" class="form-label">Name</label>
                <input type="text" required class="form-control" id="fieldText" placeholder="Enter your name here"/>
                <label for="fieldText" class="form-label">Email address</label>
                <input type="email" required class="form-control" id="fieldText" placeholder="name@example.com"/>
                <div class="form-text text-amber-100">
                 We’ll never share your email with anyone else.
                </div>
                <label for="fieldTextarea" class="form-label">Message</label>
                  <textarea class="form-control" required id="fieldText" rows="3"></textarea>
                  <div class="form-text text-amber-100">
                    Be sure to include relevant details.
                  </div>
                  <ReCAPTCHA sitekey="6LcxaR8uAAAAAHoNjQ7LRJshrTlynxks7TX4t-qW"
                  onChange={(value)=> setCaptcha(value)}/>
                  <button class="btn-solid theme-primary justify-self-start" type="submit" id="btn-submit">Submit</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </section>
   </div>
  )
}

export default ContactUs
