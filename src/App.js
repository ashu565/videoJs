import React, { useRef } from 'react';
import VideoJS from './VideoJS'; // point to where the functional component is stored

const App = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: 'https://d1fyajldp701ol.cloudfront.net/61ec0af05f53bc1805a694071644024199-620658.mp4#t=0.3',
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  return (
    <>
      <div>Rest of app here</div>

      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

      <div>Rest of app here</div>
    </>
  );
};

export default App;
