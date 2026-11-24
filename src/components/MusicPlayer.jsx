import { useRef, useState, useEffect } from 'react'
import { CONFIG, media } from '../config'

export default function MusicPlayer() {
  const src = media(CONFIG.music.file)
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [minimized, setMinimized] = useState(false)

  // Try auto-play on first user gesture anywhere on screen
  useEffect(() => {
    const startAudio = () => {
      if (audio.current && audio.current.paused) {
        audio.current.play().then(() => setPlaying(true)).catch(() => {})
      }
      window.removeEventListener('click', startAudio)
      window.removeEventListener('touchstart', startAudio)
    }
    window.addEventListener('click', startAudio, { once: true })
    window.addEventListener('touchstart', startAudio, { once: true })
    return () => {
      window.removeEventListener('click', startAudio)
      window.removeEventListener('touchstart', startAudio)
    }
  }, [])

  const toggle = () => {
    const a = audio.current
    if (!a) return
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      {src && <audio ref={audio} src={src} loop preload="auto" />}
      <div className={`music-floating-container ${playing ? 'is-playing' : ''} ${minimized ? 'min' : ''}`}>
        <button
          className="music-toggle-btn"
          onClick={toggle}
          title={playing ? 'Pause song' : 'Play Rathinamo'}
          aria-label={playing ? 'Pause music' : 'Play music'}
          disabled={!src}
        >
          <span className={`vinyl-disk ${playing ? 'spin' : ''}`}>
            🎵
          </span>
        </button>

        {!minimized && (
          <div className="music-info-pill" onClick={toggle}>
            <span className="music-song-name">Rathinamo (Female Version)</span>
            <span className="music-status">{playing ? 'Playing our song ❤️' : 'Tap to play music 🎶'}</span>
          </div>
        )}

        <button
          type="button"
          className="music-min-toggle"
          onClick={() => setMinimized(!minimized)}
          aria-label="Toggle player size"
        >
          {minimized ? '◀' : '✕'}
        </button>
      </div>
    </>
  )
}
