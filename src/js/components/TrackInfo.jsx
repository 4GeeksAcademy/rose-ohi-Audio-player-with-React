import React from 'react';

const TrackInfo = ({ currentTrack }) => {
  if (!currentTrack) return null;
  
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
        {currentTrack.name}
      </h3>
      <p style={{ 
        color: '#9CA3AF', 
        margin: 0 
      }}>
        {currentTrack.artist}
      </p>
    </div>
  );
};

export default TrackInfo;