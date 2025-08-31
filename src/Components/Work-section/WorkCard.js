import React from 'react';
import './Work.css';
import './Cards.css'

function WorkCard(props) {
  const openImage = () => {
    window.open(props.href, "_blank");
  };

  return (
    <div className="Work-card">
      <div className="Work-img">
        <img onClick={openImage} src={props.img} alt="" />
        <div className="Work-icon">
          <i onClick={openImage} src={props.img} class="fa-solid fa-play"></i>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;

