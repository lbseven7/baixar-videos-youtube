// import React from 'react';
// import VideoPlayer from './componentes/VideoPlayer.js';

// function App() {
//   const videoId = {
//     video1: 'gepG3nMl-yM',
//     video2: 'VUVPkoByTn4',
//     video3: 'jSSlJ6iQCGY'
//   };
  
//   const apiKey = process.env.REACT_APP_API_KEY;
 

//   return (
//     <div>
//        <VideoPlayer videoId={videoId.video1} apiKey={apiKey} />
//        <VideoPlayer videoId={videoId.video2} apiKey={apiKey} />
//        <VideoPlayer videoId={videoId.video3} apiKey={apiKey} />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import VideoPlayer from './componentes/VideoPlayer.js';

// function App() {
//   const [videoId, setVideoId] = useState('');

//   const apiKey = process.env.REACT_APP_API_KEY;

//   const handleVideoIdChange = (event) => {
//     setVideoId(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={videoId} onChange={handleVideoIdChange} />
//       {videoId ? (
//         <VideoPlayer videoId={videoId} apiKey={apiKey} />
//       ) : (
//         <div>Insira o ID do vídeo</div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import VideoPlayer from './componentes/VideoPlayer.js';

// function App() {
//   const [videoId, setVideoId] = useState('');
//   const [video, setVideo] = useState(null);

//   const apiKey = process.env.REACT_APP_API_KEY;

//   const handleVideoIdChange = (event) => {
//     const newVideoId = event.target.value;

//     // Atualiza o estado do ID do vídeo.
//     setVideoId(newVideoId);

//     // Verifica se o novo ID de vídeo é válido (comprimento de 11 caracteres).
//     if (newVideoId.length !== 11) {
//       return;
//     }

//     // Atualiza o estado do vídeo.
//     setVideo(
//       <VideoPlayer
//         videoId={newVideoId}
//         apiKey={apiKey}
//         setVideo={setVideo}
//       />
//     );
//   };

//   return (
//     <div>
//       <input type="text" value={videoId} onChange={handleVideoIdChange} />
//       {video || <p>Insira o ID do vídeo acima para visualizar o vídeo.</p>}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import VideoPlayer from './componentes/VideoPlayer.jsx';
import { VideoContainer } from './componentes/style/VideoPlayer.styles';

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

  return (
    <VideoContainer>
      <input
        type="text"
        value={videoId}
        onChange={handleVideoIdChange}
        placeholder='Insira o ID do vídeo'
      />
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
