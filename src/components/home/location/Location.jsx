import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle="We are a dedicated provider of innovative gadgets designed to enhance and simplify your daily life. Our range of products is available across Florida, California, Massachusetts, New York, Texas, and New Jersey. Whether you're looking for smart home devices, personal tech, or lifestyle accessories, we offer solutions that bring convenience and efficiency to your routine. Experience the ease of modern living with our cutting-edge gadgets tailored to meet your needs in these vibrant states" />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
