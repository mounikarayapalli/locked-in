import { useState } from 'react'
import { FloatingHearts } from './common'
import { CONFIG } from '../config'

export default function FinalSurprise() {
  const [burst, setBurst] = useState([])
  const [hug, setHug] = useState(false)
  const F = CONFIG.final

  const explode = () => {
    const batch = Array.from({ length: 36 }, (_, i) => {
      const a = (i / 36) * Math.PI * 2 + Math.random() * 0.4
      const d = 90 + Math.random() * 170
      return { id: Date.now() + i, dx: Math.cos(a) * d, dy: Math.sin(a) * d, s: 16 + Math.random() * 22, e: ['❤', '💖', '✦', '💗'][i % 4] }
    })
    setBurst(batch); setHug(true)
    setTimeout(() => setBurst([]), 1800)
  }

  return (
    <section className="section final">
      <FloatingHearts count={26} />
      <p className="script final-text">{F.message}</p>
      <div className="burst-anchor">
        <button className="btn pulse" onClick={explode}>{F.button}</button>
        {burst.map((b) => (
          <span key={b.id} className="burst" style={{ '--dx': `${b.dx}px`, '--dy': `${b.dy}px`, fontSize: b.s }}>{b.e}</span>
        ))}
      </div>
      <p className={`hug-msg ${hug ? 'show' : ''}`}>{F.hugMessage}</p>
    </section>
  )
}
