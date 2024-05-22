import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Product Listed' subtitle='We offer a wide range of products, including communication gadgets, entertainment devices, health and fitness tools, smart home systems, productivity accessories, photography and videography equipment, and travel essentials.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
