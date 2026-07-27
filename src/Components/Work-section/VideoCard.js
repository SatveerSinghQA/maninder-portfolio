import React from 'react'
import './Videos.css'

function VideoCard(props) {
  const openImage = () => {
    window.open(props.href, "_blank");
  };

  return (
    <div className="Video-card" onClick={openImage}>
      <div className="Video-img">
        <img src={props.img} alt="" />
        <div className="Video-overlay">
          <span className="Video-play">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M4 2.5V15.5L15 9L4 2.5Z" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default VideoCard