import React, { useState, useRef, useEffect } from 'react';
import SongInfo from './SongInfo.jsx';
import Controls from './Controls.jsx';
import List from './List.jsx';

const AudioPlayer = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  
  const audioRef = useRef(null);
  const currentSong = songs[currentSongIndex];

  // Updates audio src when song changes
  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.url;
      audioRef.current.load();
    }
  }, [currentSong]);

  //  volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(false);
  };

  const handleSongSelect = (song) => {
    const index = songs.findIndex(t => t.id === song.id);
    setCurrentSongIndex(index);
    setIsPlaying(false);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'turquoise',
      padding: '2rem' 
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '50px', 
          fontWeight: 'bold', 
          marginBottom: '200px',
          color: 'white', 
          textAlign: 'center', 
          marginTop: '20px'
          
        }}>
          🎵 AudioPlayer
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
       
          <div>
            <SongInfo currentSong={currentSong} />
            <Controls
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              onNext={handleNext}
              onPrevious={handlePrevious}
              volume={volume}
              onVolumeChange={setVolume}
            />
          </div>

     
          <div>
            <List
              songs={songs}
              currentSongId={currentSong?.id}
              onSongSelect={handleSongSelect}
            />
          </div>
        </div>

        <audio ref={audioRef} preload="metadata" />
      </div>
    </div>
  );
};

export default AudioPlayer;