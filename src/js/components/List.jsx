import React from 'react';

const List = ({ tracks, currentTrackId, onTrackSelect }) => {
  return (
    <div style={{ 
      backgroundColor: '#374151', 
      borderRadius: '0.5rem', 
      overflow: 'hidden' 
    }}>
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#4B5563' 
      }}>
        <h2 style={{ 
          color: 'white', 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          margin: 0 
        }}>
          Playlist
        </h2>
      </div>
      <div style={{ 
        maxHeight: '16rem', 
        overflowY: 'auto' 
      }}>
        {tracks.map((track) => (
          <div
            key={track.id}
            onClick={() => onTrackSelect(track)}
            style={{
              padding: '1rem',
              cursor: 'pointer',
              backgroundColor: currentTrackId === track.id ? '#2563EB' : 'transparent',
              color: currentTrackId === track.id ? 'white' : '#D1D5DB',
              borderBottom: '1px solid #4B5563'
            }}
            onMouseOver={(e) => {
              if (currentTrackId !== track.id) {
                e.target.style.backgroundColor = '#4B5563';
              }
            }}
            onMouseOut={(e) => {
              if (currentTrackId !== track.id) {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            <div style={{ fontWeight: '500' }}>{track.name}</div>
            <div style={{ fontSize: '0.875rem', opacity: '0.75' }}>{track.artist}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;