import React from 'react';
import './Videos.css';

function VideoCard({ img, href, altText }) {
  const openVideo = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openVideo();
    }
  };

  return (
    <div
      className="Video-card"
      onClick={openVideo}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Play video"
    >
      <div className="Video-img">
        <img src={img} alt={altText || 'Short video thumbnail'} loading="lazy" />
        <div className="Video-overlay">
          <span className="Video-play">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M4 2.5V15.5L15 9L4 2.5Z" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;