import { useState } from 'react'
import { Reveal } from './common'
import { CONFIG, img } from '../config'

export default function MemoryGallery() {
  const items = CONFIG.memories || []
  const [flipped, setFlipped] = useState({})
  const [showAll, setShowAll] = useState(false)

  const toggleFlip = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  // Show 12 initially, and full 26 when expanded
  const visibleItems = showAll ? items : items.slice(0, 12)

  return (
    <section className="section scrapbook" id="memories">
      <Reveal>
        <h2 className="script section-title">{CONFIG.memoriesTitle}</h2>
        <p className="memories-subtitle">Tap any polaroid to flip it and read the little secret note on the back 💌</p>
      </Reveal>

      <div className="polaroids">
        {visibleItems.map((m, i) => {
          const isFlipped = !!flipped[i]
          return (
            <Reveal key={i} className="polaroid-wrap">
              <div
                className={`polaroid-flipper ${isFlipped ? 'is-flipped' : ''} tilt${i % 4}`}
                onClick={() => toggleFlip(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFlip(i)}
                aria-label={`Polaroid memory ${i + 1}: click to flip note`}
              >
                {/* Front Side */}
                <figure className="polaroid polaroid-front">
                  <span className="tape" />
                  <div className="polaroid-img-box">
                    <img src={img(m.image)} alt={m.caption} loading="lazy" />
                    <span className="flip-hint">💌 Flip for note</span>
                  </div>
                  <figcaption>{m.caption}</figcaption>
                </figure>

                {/* Back Side */}
                <div className="polaroid polaroid-back">
                  <span className="tape back-tape" />
                  <div className="back-stamp">❤️</div>
                  <span className="back-number">Memory #{i + 1}</span>
                  <div className="back-content">
                    <p className="back-note">"{m.note || m.caption}"</p>
                    <span className="back-signature">— Forever Your Girl ❤️</span>
                  </div>
                  <span className="flip-hint-back">📷 Tap to see photo</span>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      {items.length > 12 && (
        <div className="gallery-expand-wrap">
          <button
            type="button"
            className="btn pulse expand-memories-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? '▲ Show Fewer Memories' : `💖 View All ${items.length} Memories (More Photos!)`}
          </button>
        </div>
      )}
    </section>
  )
}
