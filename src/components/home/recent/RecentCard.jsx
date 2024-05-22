import React from "react"
import { list } from "../../data/Data"
import "./recent.css"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, location, name, price} = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' className="" />
              </div>
              <div className='text'>
                <h4>{name}</h4>
                <p>
                 {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> 
                </div>
                
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
