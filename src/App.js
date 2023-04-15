/* eslint-disable no-undef */

import React, { useState } from 'react';
import VideoPlayer from './componentes/VideoPlayer/VideoPlayer.jsx';
import { VideoContainer } from './componentes/VideoPlayer/style/VideoPlayer.styles.jsx';
// import Header from './componentes/Header/index.jsx';

function App() {
  const [videoId, setVideoId] = useState('');
  const [videos, setVideos] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleVideoIdChange = (event) => {
    const newVideoId = event.target.value;

    // Atualiza o estado do ID do vídeo.
    setVideoId(newVideoId);

    // Verifica se o novo ID de vídeo é válido (comprimento de 11 caracteres).
    if (newVideoId.length !== 11) {
      return;
    }

    // Adiciona o novo vídeo à lista de vídeos.
    setVideos((prevVideos) => [
      ...prevVideos,
      <VideoPlayer videoId={newVideoId} apiKey={apiKey} />
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { searchInput } = event.target.elements;
    handleSearch(searchInput.value);
  }

  const searchInput = () => (
    <>
      <input
      onSubmit={handleSubmit}
      type="text"
      value={videoId}
      onChange={handleVideoIdChange}
      placeholder='Insira o ID do vídeo' />
      {/* <button onClick={handleSubmit}>Buscar</button> */}
    </>
  );

  return (
    <VideoContainer>
      {/* <Header /> */}
      {searchInput()}
      {videos.length === 0 ? (
        <p>Insira o ID do vídeo acima para visualizar o vídeo.</p>
      ) : (
        videos.map((video, index) => (
          <div key={index}>
            {video}
            <hr />
          </div>
        ))
      )}
    </VideoContainer>
  );
}

export default App;

