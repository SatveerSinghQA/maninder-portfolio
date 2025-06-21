import React, { useState, useEffect } from 'react';
import './About.css';
import video from '../Pictures/color grade wipe-.mp4';

function About() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint if needed
    };

    checkScreenSize(); // initial check
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
              {isSmallScreen ? (
                <video 
                  src={video} 
                  controls 
                  className="About-video" 
                />
              ) : (
                <video 
                  src={video} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="About-video" 
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
