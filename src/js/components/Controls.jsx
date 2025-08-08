import React from 'react';

const Controls = ({ 
  isPlaying, 
  onPlayPause, 
  onPrevious, 
  onNext,
  volume,
  onVolumeChange 
}) => {
  return (
    <div style={{ 
      padding: '1.5rem', 
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '1rem', 
        marginBottom: '1rem' 
      }}>
        <button
          onClick={onPrevious}
          style={{
            padding: '0.75rem',
            backgroundColor: '#ca25ebff',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            fontSize: '1rem'
          }}
        >

          {/* back button */}
         <i class="fa-solid fa-backward-step"></i>
        </button>
        
        <button
          onClick={onPlayPause}
          style={{
            padding: '2rem',
            backgroundColor: '#ca25ebff',
            border: 'none', 
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.5rem'
          }}
        >
          {/* Pause & Play toggle button */}
          {isPlaying ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}
        </button>
        
        <button
          onClick={onNext}
          style={{
            padding: '0.75rem',
            backgroundColor: '#ca25ebff',
            border: 'none',
            borderRadius: '50%',
            color: 'white', 
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
         <i class="fa-solid fa-forward-step"></i>
        </button>
      </div>
      
      {/* Volume Control */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '0.5rem' 
      }}>
        <span style={{ color: '#9CA3AF' }}></span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          style={{ width: '6rem' }}
        />
      </div>
    </div>
  );
};

export default Controls;