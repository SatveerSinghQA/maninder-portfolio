import React from 'react'
import './Videosc.css'
function VideoCard(props) {
    const openImage = () => {
        window.open(props.href, "_blank");
    };

    return (
        <div>
            <div className="Video-card">
                <div className="Video-img">
                    <img onClick={openImage} src={props.img} alt="" />
                    <div className="Video-icon">
                        <i onClick={openImage} src={props.img} class="fa-solid fa-play"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
