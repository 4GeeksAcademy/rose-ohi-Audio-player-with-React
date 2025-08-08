// src/js/component/AudioPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import TrackInfo from './TrackInfo.jsx';
import PlayerControls from './PlayerControls.jsx';
import TrackList from './TrackList.jsx';

const AudioPlayer = ({ tracks }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  
  const audioRef = useRef(null);
  const currentTrack = tracks[currentTrackIndex];

  // Update audio src when track changes
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.src = currentTrack.url;
      audioRef.current.load();
    }
  }, [currentTrack]);

  // Update volume
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
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(false);
  };

  const handleTrackSelect = (track) => {
    const index = tracks.findIndex(t => t.id === track.id);
    setCurrentTrackIndex(index);
    setIsPlaying(false);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #111827 0%, #1E3A8A 100%)',
      padding: '2rem' 
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: 'white', 
          textAlign: 'center', 
          marginBottom: '2rem' 
        }}>
          🎵 Music Player
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {/* Left Column - Player Controls */}
          <div>
            <TrackInfo currentTrack={currentTrack} />
            <PlayerControls
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              onNext={handleNext}
              onPrevious={handlePrevious}
              volume={volume}
              onVolumeChange={setVolume}
            />
          </div>

          {/* Right Column - Track List */}
          <div>
            <TrackList
              tracks={tracks}
              currentTrackId={currentTrack?.id}
              onTrackSelect={handleTrackSelect}
            />
          </div>
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} preload="metadata" />
      </div>
    </div>
  );
};

export default AudioPlayer;