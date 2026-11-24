import { useState } from 'react'
import { Reveal } from './common'
import { CONFIG, media, img } from '../config'

export default function VideoMemories() {
  const [playingIndex, setPlayingIndex] = useState(null)
  const [downloading, setDownloading] = useState(null)

  const togglePlay = (index) => {
    setPlayingIndex((prev) => (prev === index ? null : index))
  }

  const handleDownload = async (url, filename, index) => {
    setDownloading(index)
    try {
      const res = await fetch(url)
      const blob = await res.blob()
      const blobUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = `${filename}.mp4`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000)
    } catch {
      // Direct navigation/download fallback
      const link = document.createElement('a')
      link.href = url
      link.download = `${filename}.mp4`
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } finally {
      setDownloading(null)
    }
  }

  return (
    <section className="section videos" id="videos">
      <Reveal><h2 className="script section-title light">{CONFIG.videosTitle}</h2></Reveal>
      <div className="video-grid">
        {CONFIG.videos.map((v, i) => {
          const src = media(v.file)
          const thumbSrc = v.thumbnail ? img(v.thumbnail) : null
          const isPlaying = playingIndex === i

          return (
            <Reveal key={i}>
              <article className="video-card">
                <div className="video-frame">
                  {src ? (
                    isPlaying ? (
                      <video
                        controls
                        autoPlay
                        playsInline
                        preload="auto"
                        src={src}
                        className="video-element"
                      />
                    ) : (
                      <div
                        className="video-thumb-wrap"
                        onClick={() => togglePlay(i)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePlay(i)}
                        aria-label={`Play video: ${v.downloadName || v.file}`}
                      >
                        {thumbSrc && (
                          <img
                            src={thumbSrc}
                            alt={v.caption}
                            className="video-thumb-img"
                            loading="lazy"
                          />
                        )}
                        <div className="video-play-overlay">
                          <span className="play-pulse-circle">
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                              <polygon points="6 3 20 12 6 21 6 3" />
                            </svg>
                          </span>
                          <span className="play-hint-tag">Tap to Watch</span>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="video-empty">Add <b>{v.file}.mp4</b> to src/assets</div>
                  )}
                </div>

                <p>{v.caption}</p>

                {src && (
                  <div className="video-actions">
                    <button
                      type="button"
                      className={`video-btn video-btn-view ${isPlaying ? 'active' : ''}`}
                      onClick={() => togglePlay(i)}
                    >
                      {isPlaying ? (
                        <>
                          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                          <span>Close Video</span>
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          <span>View Video</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className="video-btn video-btn-download"
                      onClick={() => handleDownload(src, v.downloadName || `video-memory-${i + 1}`, i)}
                      disabled={downloading === i}
                      title="Download this video memory"
                    >
                      {downloading === i ? (
                        <span>Downloading...</span>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          <span>Download Video</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
