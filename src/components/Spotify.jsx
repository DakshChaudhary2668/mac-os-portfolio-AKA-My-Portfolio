import React from 'react'
import MacWindow from './windows/MacWindow'
import "./windows/Spotify.scss"
const Spotify = ({ onClose, onMinimize, isClosing, isMinimizing }) => {
  return (
    <MacWindow width="25vw" height="56vh" onClose={onClose} isClosing={isClosing} isMinimizing={isMinimizing} onMinimize={onMinimize}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/3PwInlQSarO1GB0QR30cjG?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify
