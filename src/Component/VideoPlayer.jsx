import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
