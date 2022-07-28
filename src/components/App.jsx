import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearchSubmit = async value => {
    const response = await youtube.get('/search', {
      params: {
        q: value,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  useEffect(() => {
    onSearchSubmit('Peppa Pig');
  }, []);

  return (
    <div className='ui container'>
      <SearchBar submit={onSearchSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              videos={videos}
              // We can also write the commented code as the uncommented one
              // selectVideo={video => setSelectedVideo(video)}
              selectVideo={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
