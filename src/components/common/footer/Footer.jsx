import React from "react"
import "./footer.css"
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiBuildingOffice } from "react-icons/hi2";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5 hm'><h4>Contact Us Today</h4> <p>+1-2393411116</p> </button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <h2>Contact Us</h2>
              <hr class="custom-line"></hr>
              <div className="contact">
                    <div className="contact-card">
                        <AiOutlineMail size={40} color='gray' />
                        <div className="contact-detail">
                            <h2 className="font-bold">Email</h2>
                            <p className="">Infinityfind@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-card">
                        <BsTelephone size={40} color='gray' />
                        <div className="contact-detail">
                            <h2 className="">Phone</h2>
                            <p className="">+92-370-0183868</p>
                        </div>
                    </div>
                    <div className="contact-card">
                        <HiBuildingOffice size={40} color='gray' />
                        <div className="contact-detail">
                            <h2 className="">Address</h2>
                            <p className="">7901 4th ST, N# 13461, ST Petersburg, FL. USA</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 InfinityFind. Designd By CoderVector Technologies.</span>
      </div>
    </>
  )
}

export default Footer
