import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { VideoContainer } from '../componentes/style/VideoPlayer.styles.js';

function VideoPlayer({ videoId, apiKey }) {
  const [video, setVideo] = useState();

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

    fetch(url)
      .then(response => response.json())
      .then(data => setVideo(data.items[0]));
  }, [videoId, apiKey]);

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <VideoContainer>
      <h2>{video.snippet.title}</h2>
      <ReactPlayer url={videoUrl}  />
      {/* <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} /> */}
      {/* <p>{video.snippet.description}</p> */}
    </VideoContainer>

  );
}

export default VideoPlayer;

