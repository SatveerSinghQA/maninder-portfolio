import React from 'react';
import './About.css';
import video from '../Pictures/color grade wipe-.mp4';

function About() {
  return (
    <>
      <section className='About-section'>
        <div className='About-heading'>
          <h1>ABOUT US</h1>
        </div>

        <div className="About-container">
          <div className="About-details">
            <div className="details">
              <h1>RAW TO CINEMATIC</h1>
              <div className='About-para'>
                <p>
                  Bringing stories to life through expert video editing. With 3 years of experience, I craft seamless transitions, captivating visuals, and powerful narratives that leave a lasting impact.
                </p>
              </div>
            </div>

            <div className="vid">
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
        </div>

        {/* <div className="About-skill">
          <h1>NATIVE IN</h1>
          <ul>
            <li>Adobe Premiere Pro</li>
            <li>Adobe After Effects</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Lightroom</li>
            <li>Canva</li>
          </ul>
        </div> */}
      </section>
    </>
  );
}

export default About;
