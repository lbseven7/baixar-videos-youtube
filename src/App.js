import React from 'react';
import VideoPlayer from './componentes/VideoPlayer.js';

function App() {
  const videoId = {
    video1: 'gepG3nMl-yM',
    video2: 'VUVPkoByTn4'
  };
  
  const apiKey = 'AIzaSyCJ_zYDVr-C1Uem7I_LNOoIFuQ-Ltb7KU4';
 

  return (
    <div>
       <VideoPlayer videoId={videoId.video1} apiKey={apiKey} />
       <VideoPlayer videoId={videoId.video2} apiKey={apiKey} />
    </div>
  );
}

export default App;

