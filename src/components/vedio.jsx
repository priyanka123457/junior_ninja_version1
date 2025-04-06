import React from 'react';

const VideoComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Watch this video</h2>
        <iframe
          width="1020"
          height="600"
          src="https://www.youtube.com/embed/lgOvvr57qo0" // Real YouTube embed URL
          title="YouTube video player"
          frameBorder="0"
        //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        //   allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
