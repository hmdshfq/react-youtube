import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, selectVideo }) => {
  const videosList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        selectVideo={selectVideo}
      />
    );
  });
  return <div className='ui relaxed divided list'>{videosList}</div>;
};

export default VideoList;
