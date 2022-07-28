import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, selectVideo }) => {
  return (
    <div
      className='item video-item'
      onClick={() => selectVideo(video)}>
      <img
        className='ui image'
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className='content'>
        <div className='header'>
          <p>{video.snippet.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
