import React, { useState } from 'react';
import "./Work.css"
import WorkCard from './WorkCard'
import s1 from '../Pictures/youtube_thumbnail_maxres.jpg'
import s2 from '../Pictures/monkey man thumbnail;.png'
import s3 from '../Pictures/Podcast.png'
import s4 from '../Pictures/thriller series thumbnail.png'
import s5 from '../Pictures/KALKI FINAL AA THUMBNAIL.png'
import s6 from '../Pictures/Untitled-1-Recovered.png'
import s7 from '../Pictures/Untitled-1.png'

function Work() {

    const [showAll, setShowAll] = useState(false);

    const items = [
      { label: s1, url: 'https://drive.google.com/file/d/1KA5Dk92FaY1JzOYDQZJGY9_jzrL-7lJp/view?usp=drive_link' },
      { label: s2, url: 'https://drive.google.com/file/d/1A1_SUF9UUbdHKtvmMDmdjBXDImDG4bQd/view?usp=drive_link' },
      { label: s3, url: 'https://drive.google.com/file/d/1WMTAyAnIzG-se7lCIbpSN90-7Yv28qrg/view?usp=drive_link' },
      { label: s4, url: 'https://drive.google.com/file/d/16HiK1tcFTPtJNfDO_XIBzv_SMC6l7Nm2/view?usp=drive_link' },
      { label: s5, url: 'https://drive.google.com/file/d/1cPswI3lvY_89yMKzEhy3pZiPEwLq5BLK/view?usp=drive_link' },
      { label: s6, url: 'https://drive.google.com/file/d/1qFK7rJEC8hWvb9UDb9AnloqNZpr10SJD/view?usp=drive_link' },
      { label: s7, url: 'https://drive.google.com/file/d/1EOlcFQQ4I0DU4Ws30DGhCbxdjtpKqE8r/view?usp=drive_link' },
  
    ];
    const visibleItems = showAll ? items : items.slice(0, 6);

  return (
    <>
      <section className='Work-section'>
        <div className='Work-heading'>
          <h1>MY WORK</h1>
          <p style={{color:'yellow'}}>Tap on image to play short videos</p>
        </div>
        {/* <div className='Work-heading2'>
          <h1>LONG VIDEOS</h1>
        </div> */}
        <div className="container">
        <div className='Work-container'>
          {visibleItems.map((item, index) => (
          <WorkCard key={index} img={item.label} href={item.url}/>
        ))}
        </div>
        <button className='btn' onClick={() => setShowAll(prev => !prev)}>
        {showAll ? 'Show Less' : 'Show More'}
      </button>
      </div>
      </section>
    </>
  )
}

export default Work
