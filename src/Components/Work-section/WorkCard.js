import React from 'react'
import './Work.css'

function WorkCard(props) {

    const openImage = () => {
        window.open(props.href, "_blank");
    };

    return (
        <div className="Work-card" onClick={openImage}>
            <div className="Work-img">
                <img src={props.img} alt="" />
                <div className="Work-overlay">
                    <span className="Work-play">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M4 2.5V15.5L15 9L4 2.5Z" fill="currentColor" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WorkCard