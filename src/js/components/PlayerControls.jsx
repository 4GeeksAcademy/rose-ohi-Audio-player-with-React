
import React from 'react';

const PlayerControls = ({ 
  isPlaying, 
  onPlayPause, 
  onPrevious, 
  onNext,
  volume,
  onVolumeChange 
}) => {
  return (
    <div style={{ 
      backgroundColor: '#111827', 
      padding: '1.5rem', 
      borderRadius: '0.5rem' 
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
            backgroundColor: '#2563EB',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          ⏮
        </button>
        
        <button
          onClick={onPlayPause}
          style={{
            padding: '1rem',
            backgroundColor: '#2563EB',
            border: 'none', 
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.5rem'
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        
        <button
          onClick={onNext}
          style={{
            padding: '0.75rem',
            backgroundColor: '#2563EB',
            border: 'none',
            borderRadius: '50%',
            color: 'white', 
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          ⏭
        </button>
      </div>
      
      {/* Volume Control */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '0.5rem' 
      }}>
        <span style={{ color: '#9CA3AF' }}>🔊</span>
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

export default PlayerControls;