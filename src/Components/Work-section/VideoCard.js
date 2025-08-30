import React from 'react'

function VideoCard(props) {
  const openImage = () => {
        window.open(props.href, "_blank");
      };

    return (
        <div>
            <div className="Video-card">
                <div className="Video-img">
                    <img onClick={openImage} src={props.img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default VideoCard
