import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';

function App() {
  const { audioRef, track } = useContext(PlayerContext);

  if (!audioRef) {
    return <div>Loading...</div>; // Or handle the loading/error state appropriately
  }

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      {track && track.file ? (
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
      ) : (
        <audio ref={audioRef} preload='auto'></audio>
      )}
    </div>
  );
}

export default App;
