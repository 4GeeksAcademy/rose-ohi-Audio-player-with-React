import React from 'react';

const SongInfo = ({ currentSong }) => {
  if (!currentSong) return null;
  
  return (
    <div style={{ 
      backgroundColor: '#374151', 
      padding: '1rem', 
      borderRadius: '0.5rem', 
      marginBottom: '1rem' 
    }}>
      <h3 style={{ 
        color: 'white', 
        fontSize: '1.125rem', 
        fontWeight: '600', 
        margin: 0 
      }}>
        {currentSong.name}
      </h3>
      <p style={{ 
        color: '#9CA3AF', 
        margin: 0 
      }}>
        {currentSong.artist}
      </p>
    </div>
  );
};

export default SongInfo;