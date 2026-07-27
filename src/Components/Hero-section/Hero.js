import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className='Hero-section'>
      <div className="Hero-container">

        <div className="Hero-eyebrow">
          <span className="Hero-rec">
            <span className="Hero-rec-dot"></span>REC
          </span>
          <span className="Hero-timecode">00:00:03:12</span>
          <span className="Hero-reel">SHOWREEL — 001</span>
        </div>

        <h1 className='Hero-heading'>
          Cut. Frame.<br />
          <span className="Hero-heading-accent">Create, elevate</span><br />
          your vision.
        </h1>

        <p className='Hero-para'>
          Every frame tells a story. With 3 years behind the timeline, I cut
          edits that hold attention, build tension, and land the point.
        </p>

        <div className="Hero-actions">
          {/* <a href="#work" className="Hero-btn Hero-btn-primary">Watch the reel</a> */}
          <a href="#contact" className="Hero-btn Hero-btn-ghost">Get in touch →</a>
        </div>

        <div className="Hero-timeline" aria-hidden="true">
          <div className="Hero-timeline-track">
            <span className="Hero-marker" style={{ left: '4%' }}>
              <span className="Hero-marker-dot"></span>
              <span className="Hero-marker-label">CUT</span>
            </span>
            <span className="Hero-marker" style={{ left: '34%' }}>
              <span className="Hero-marker-dot"></span>
              <span className="Hero-marker-label">FRAME</span>
            </span>
            <span className="Hero-marker" style={{ left: '64%' }}>
              <span className="Hero-marker-dot"></span>
              <span className="Hero-marker-label">GRADE</span>
            </span>
            <span className="Hero-marker" style={{ left: '94%' }}>
              <span className="Hero-marker-dot"></span>
              <span className="Hero-marker-label">DELIVER</span>
            </span>
            <span className="Hero-playhead"></span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero