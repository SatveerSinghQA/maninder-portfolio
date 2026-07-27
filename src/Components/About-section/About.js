import React from 'react';
import './About.css';
import video from '../Pictures/color grade wipe-.mp4';

function About() {
  return (
    <section className='About-section'>
      <div className="About-container">

        <div className="About-copy">
          <span className="About-eyebrow">04 / ABOUT</span>
          <h1 className="About-title">Raw to cinematic</h1>
          <p className="About-para">
            Bringing stories to life through expert video editing. With 3 years
            of experience, I craft seamless transitions, captivating visuals,
            and powerful narratives that leave a lasting impact.
          </p>
        </div>

        <div className="About-vid">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="About-video"
          />
        </div>

      </div>
    </section>
  );
}

export default About;