import React, { useState } from 'react';
import "./Work.css"
import "./Videos.css"
// import WorkCard from './WorkCard'
// import s1 from '../Pictures/b&w.webp';
// import s2 from '../Pictures/car.webp';
import s3 from '../Pictures/ai.png';
import s4 from '../Pictures/girl.webp';
import s5 from '../Pictures/rich.png';
import s6 from '../Pictures/loki 2.webp'
import s8 from '../Pictures/piyush.webp'
import s9 from '../Pictures/money.webp'
import s10 from '../Pictures/socks.webp'
import VideoCard from './VideoCard';

function Videos() {
      const [showAll, setShowAll] = useState(false);

const items = [
    // { label: s1, url: 'https://drive.google.com/file/d/1iwHVLCf2Itf2NeB_N7FaDgKPax4VZoHI/view?usp=drive_link' },
    { label: s5, url: 'https://youtube.com/shorts/priFQSZTXrg?si=E0pmnkVDD6_iCLXW' },
    { label: s4, url: 'https://drive.google.com/file/d/1SC58ICAovU8D45j7cTWZ9gS0HEGkDVez/view' },
    { label: s9, url: 'https://youtube.com/shorts/HcqPZb-4pVQ?si=lNtxq6I80_JIRlXB' },
    // { label: s1, url: 'https://drive.google.com/file/d/15wMnbg7OPHK7Z6dwGlqhhHB77gL1fged/view?usp=drive_link' },
    { label: s3, url: 'https://www.youtube.com/shorts/KJWtOBKLcYg' },
    { label: s8, url: 'https://youtube.com/shorts/tLgqveNpq3Q?si=0LsiCD-hjfVWqxBD' },
    // { label: s9, url: 'https://drive.google.com/file/d/103SQFrbj36HkM_cU8N66TGGQAAK8KxC0/view?usp=drive_link' },
    // { label: s8, url: 'https://drive.google.com/file/d/1f3Y3wyoFEjPo5GBJuXzuNS_oM2xH-UeN/view?usp=drive_link' },
    // { label: s2, url: 'https://drive.google.com/file/d/1RT1dFICAZHu6mvQ5mdMIaIWIebOU1SPN/view?usp=drive_link' },
    // { label: s10, url: 'https://drive.google.com/file/d/1VuptYUyhoxCxc0fIVpj1vTgb-FZmag8s/view?usp=drive_link' },
    { label: s6, url: 'https://drive.google.com/file/d/1AIdqs09ZRBTgVWyLGhWuxQ6GE-E4XlRT/view' },
    { label: s10, url: 'https://drive.google.com/file/d/1FAbJSnr1CGmFQIv7rRy2E3wMAcIikpAj/view?usp=drive_link' },
  ];
    const visibleItems = showAll ? items : items.slice(0, 5);
  return (
      <>
      <section className='Work-section'>
        <div className='Work-heading'>
          <h1>MY WORK</h1>
          {/* <p style={{color:'yellow'}}>Tap on image to play videos</p> */}
        </div>
        {/* <div className='Work-heading2'>
          <h1>LONG VIDEOS</h1>
        </div> */}
        <div className="container">
        <div className='Video-container'>
          {visibleItems.map((item, index) => (
          <VideoCard key={index} img={item.label} href={item.url} />
        ))}
        </div>
        <button onClick={() => setShowAll(prev => !prev)} className='btn'>
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
      </section>
    </>
  )
}

export default Videos




