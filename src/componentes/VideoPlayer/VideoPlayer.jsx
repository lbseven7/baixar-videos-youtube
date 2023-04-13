import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { VideoContainer } from './style/VideoPlayer.styles.jsx';

function VideoPlayer({ videoId, apiKey }) {
  const [video, setVideo] = useState();

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

    fetch(url)
      .then(response => response.json())
      .then(data => setVideo(data.items[0]));
  }, [videoId, apiKey]);

  if (!video) {
    return <div>O vídeo será carregado em instantes...</div>;
  }

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const titulo = 'Título: ' + video.snippet.title;

  return (
    <VideoContainer>
      <h2>{titulo}</h2>
      <ReactPlayer url={videoUrl}  />
    </VideoContainer>

  );
}

export default VideoPlayer;

