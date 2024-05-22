import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Company Story' subtitle='Check out our company story and work process' />

            <p>Welcome to Infinity Find, your premier destination for innovative gadgets that simplify and enhance your everyday life. Based in the sunny state of Florida, USA, our mission is to bring you the latest and most efficient tools and devices designed to make your daily routines smoother and more enjoyable.</p>
            <p>At Infinity Find, we are passionate about technology and its potential to transform lives. Our carefully curated selection of gadgets ranges from smart home devices to personal tech accessories, all aimed at providing convenience and adding a touch of modernity to your lifestyle.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
