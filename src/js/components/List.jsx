import React from 'react';

const List = ({ songs, currentSongId, onSongSelect }) => {
  return (
    <div style={{ 
      backgroundColor: '#513749ff', 
      borderRadius: '0.5rem', 
      overflow: 'hidden' 
    }}>
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#5b4b63ff' 
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
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() => onSongSelect(song)}
            style={{
              padding: '1rem',
              cursor: 'pointer',
              backgroundColor: currentSongId === song.id ? '#2563EB' : 'transparent',
              borderBottom: '1px solid #4B5563'
            }}
            onMouseOver={(e) => {
              if (currentSongId !== song.id) {
                e.target.style.backgroundColor = '#4B5563';
              }
            }}
            onMouseOut={(e) => {
              if (currentSongId !== song.id) {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            <div style={{ fontWeight: '500' }}>{song.name}</div>
            <div style={{ fontSize: '0.875rem', opacity: '0.75' }}>{song.artist}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;