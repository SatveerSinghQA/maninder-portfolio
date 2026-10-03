import React, { useState } from 'react';
import "./Work.css";
import "./Videos.css";

// import s4 from '../Pictures/girl.webp';
// import s6 from '../Pictures/loki 2.webp';
// import s10 from '../Pictures/socks.webp';
import VideoCard from './VideoCard';

// Helper function to extract 11-character YouTube or Shorts Video ID
function getYouTubeId(url) {
  if (!url) return null;
  // Matches standard watch URLs, embed URLs, short URLs, and YouTube Shorts (/shorts/)
  // const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Helper function to get thumbnail (auto YouTube/Shorts or local image label)
function getThumbnail(item) {
  const videoId = getYouTubeId(item.url);

  if (videoId) {
    // Automatically uses YouTube's high-quality thumbnail
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  // Fallback to manually provided local image for Google Drive / external links
  return item.label;
}

function Videos() {
  const [showAll, setShowAll] = useState(false);

  const items = [
    { url: 'https://youtube.com/shorts/InA1tV3OCeo?si=NUmnEFMLUP7LWUsE' },
      { url: 'https://youtube.com/shorts/priFQSZTXrg?si=E0pmnkVDD6_iCLXW' },
      { url: 'https://youtube.com/shorts/_Fj7YaCMeO4?si=brUwCj8CWRs5R117' },
    // { url: 'https://youtube.com/shorts/PHEyxGXoVGo?si=e9TPPblm3IMNNiCe' },
    { url: 'https://youtube.com/shorts/gGAYqzMZCB8?si=DKpLK_KDu-rQbpnT' },
      { url: 'https://www.youtube.com/shorts/KJWtOBKLcYg' },
    // { label: s4, url: 'https://drive.google.com/file/d/1SC58ICAovU8D45j7cTWZ9gS0HEGkDVez/view' },
    { url: 'https://youtube.com/shorts/DU-c162O1Pk?si=1JEYhLRHqsLHP1jW' },
    { url: 'https://youtube.com/shorts/9r8YAGGPo4A?si=HhnQ0P-6RpWeAvwT' },

    { url: 'https://youtube.com/shorts/HcqPZb-4pVQ?si=lNtxq6I80_JIRlXB' },
  
  
    { url: 'https://youtube.com/shorts/tLgqveNpq3Q?si=0LsiCD-hjfVWqxBD' },
    // { label: s6, url: 'https://drive.google.com/file/d/1AIdqs09ZRBTgVWyLGhWuxQ6GE-E4XlRT/view' },
    // { label: s10, url: 'https://drive.google.com/file/d/1FAbJSnr1CGmFQIv7rRy2E3wMAcIikpAj/view?usp=drive_link' },
  ];

  const visibleItems = showAll ? items : items.slice(0, 5);

  return (
    <section className='Work-section'>
      <div className='Work-heading'>
        <span className="Work-eyebrow">02 / SHORT FORM</span>
        <h1>My Work</h1>
        <p className="Work-hint">Tap a thumbnail to play</p>
      </div>

      <div className="container">
        <div className='Video-container'>
          {visibleItems.map((item, index) => (
            <VideoCard 
              key={index} 
              img={getThumbnail(item)} 
              href={item.url} 
            />
          ))}
        </div>

        {items.length > 5 && (
          <button onClick={() => setShowAll(prev => !prev)} className='btn'>
            {showAll ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </section>
  );
}

export default Videos;
