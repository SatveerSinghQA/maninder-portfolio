import React, { useState } from 'react';
import "./Work.css";
import WorkCard from './WorkCard';

// Fallback image for non-YouTube links (e.g. Google Drive links)
import defaultFallbackImg from '../Pictures/youtube_thumbnail_maxres.jpg';

// Helper function to extract 11-character YouTube Video ID
function getYouTubeId(url) {
  if (!url) return null;
  // Replace this line in Videos.js and Work.js:
const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Helper function to resolve thumbnail URL (auto YouTube thumbnail or manual fallback)
function getThumbnail(item) {
  const videoId = getYouTubeId(item.url);
  
  if (videoId) {
    // Automatically uses YouTube's high-quality thumbnail
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
  
  // If a manual image was specified in item.label, use that; otherwise use default fallback
  return item.label || defaultFallbackImg;
}

function Work() {
  const [showAll, setShowAll] = useState(false);

  // You can now put YouTube URLs directly, or keep custom images/Drive links
  const items = [
    { url: 'https://youtu.be/LTFSt8gbY64?si=pefjbW6Mqmk6kDIo' },
    { url: 'https://youtu.be/VhlxNBGGMAw?si=6m3Em0Q98GipeHc0' },
    { url: 'https://drive.google.com/file/d/1WMTAyAnIzG-se7lCIbpSN90-7Yv28qrg/view?usp=drive_link'},
    // { url: 'https://www.youtube.com/watch?v=L_LUpnjgPso' },
    // { url: 'https://drive.google.com/file/d/1WMTAyAnIzG-se7lCIbpSN90-7Yv28qrg/view' },
  ];

  const visibleItems = showAll ? items : items.slice(0, 6);

  return (
    <section className='Work-section'>
      <div className='Work-heading'>
        <span className="Work-eyebrow">03 / SELECTS</span>
        <h1>My Work</h1>
        <p className="Work-hint">Tap a thumbnail to play</p>
      </div>

      <div className="container">
        <div className='Work-container'>
          {visibleItems.map((item, index) => (
            <WorkCard 
              key={index} 
              img={getThumbnail(item)} 
              href={item.url} 
            />
          ))}
        </div>

        {items.length > 6 && (
          <button className='btn' onClick={() => setShowAll(prev => !prev)}>
            {showAll ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </section>
  );
}

export default Work;