import { useState } from 'react'
import { Reveal } from './common'

export default function BirthdayCake() {
  const [blown, setBlown] = useState(false)
  const [confetti, setConfetti] = useState([])

  const blowCandles = () => {
    if (blown) return
    setBlown(true)
    // Create confetti burst
    const pieces = Array.from({ length: 48 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animDelay: Math.random() * 0.4,
      bg: ['#e8334f', '#f3c9b8', '#ffbf00', '#ff6b8b', '#ffffff', '#e91e63'][i % 6],
      size: 8 + Math.random() * 12,
      shape: i % 3 === 0 ? '50%' : '2px',
    }))
    setConfetti(pieces)
  }

  const relight = () => {
    setBlown(false)
    setConfetti([])
  }

  return (
    <section className="section cake-section" id="cake">
      <Reveal>
        <h2 className="script section-title light">Make a Birthday Wish 🎂</h2>
        <p className="cake-sub">Close your eyes, make your deepest wish, and blow out the candles!</p>
      </Reveal>

      <div className="cake-stage">
        {/* Confetti particles */}
        {blown && (
          <div className="confetti-container" aria-hidden="true">
            {confetti.map((c) => (
              <span
                key={c.id}
                className="confetti-piece"
                style={{
                  left: `${c.left}%`,
                  backgroundColor: c.bg,
                  width: `${c.size}px`,
                  height: `${c.size * 1.4}px`,
                  borderRadius: c.shape,
                  animationDelay: `${c.animDelay}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Illustrated Cake */}
        <div className={`cake-box ${blown ? 'blown' : ''}`} onClick={blowCandles} role="button" tabIndex={0}>
          {/* Candles */}
          <div className="candles-row">
            {[0, 1, 2].map((i) => (
              <div key={i} className="candle">
                <div className={`flame ${blown ? 'out' : ''}`} />
                {blown && <div className="smoke-puff" />}
                <div className="candle-stick" />
              </div>
            ))}
          </div>

          {/* Cake Layers */}
          <div className="cake-layer top-layer">
            <div className="icing" />
            <div className="berries">
              <span>🍓</span><span>🫐</span><span>🍓</span>
            </div>
          </div>
          <div className="cake-layer mid-layer">
            <div className="icing" />
          </div>
          <div className="cake-layer bottom-layer">
            <div className="icing" />
          </div>
          <div className="cake-plate" />
        </div>

        {/* Action button */}
        <div className="cake-actions">
          {!blown ? (
            <button type="button" className="btn pulse blow-btn" onClick={blowCandles}>
              🎂 Blow Out the Candles!
            </button>
          ) : (
            <div className="wish-revealed">
              <span className="sparkle-badge">✨ Your Wish Has Been Sent to the Stars! ✨</span>
              <p className="wish-message">
                Happy Birthday to my hardworking man! May all your prayers, dreams, and continuous hard work turn into massive blessings this year. I will always be right here, standing by you and cheering you on. ❤️
              </p>
              <button type="button" className="btn relight-btn" onClick={relight}>
                🔄 Relight Candles
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
