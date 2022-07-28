import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);

  const search = async value => {
    const response = await youtube.get('/search', {
      params: {
        q: value,
      },
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  /* 
  We can return the values in two ways 
  Either use the React convention and use
  return [videos, search]
  or use the JS convention and use
  return { videos, search }
  */
  return [videos, search];
};

export default useVideos;
