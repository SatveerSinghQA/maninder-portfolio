import React from 'react'
import './Hero.css'
import photo1 from '../Pictures/mann.png'
// import bg from '../Pictures/VideoTimeline bg.png'

function Hero() {
  return (
    <>
      <section className='Hero-section'>
        <div className="Hero-container">
          <div className="Hero-img">
            <img src={photo1} alt="" />
          </div>
          <div className="Hero-details">
            <h1 className='Hero-heading'>Let's <span>MAKE</span> your video more <span>INTERESTING</span>  </h1>
            <div className='Hero-para'><p>Every frame tells a story, and with 3 years of experience, I craft seamless edits that captivate, inspire, and leave a lasting impact.
            </p></div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
