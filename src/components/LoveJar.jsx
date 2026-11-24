import { useState } from 'react'
import { Reveal, FloatingHearts } from './common'
import { CONFIG } from '../config'

export default function LoveJar() {
  const reasons = CONFIG.loveReasons || []
  const [index, setIndex] = useState(0)
  const [openNote, setOpenNote] = useState(false)
  const [drawnCount, setDrawnCount] = useState(0)

  const drawNote = () => {
    setOpenNote(false)
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % reasons.length)
      setDrawnCount((c) => c + 1)
      setOpenNote(true)
    }, 280)
  }

  const current = reasons[index]

  return (
    <section className="section lovejar-section" id="lovejar">
      <FloatingHearts count={16} />
      <Reveal>
        <h2 className="script section-title light">Why I Love You</h2>
        <p className="lovejar-sub">A jar filled with real, simple reasons why you mean everything to me</p>
      </Reveal>

      <div className="lovejar-wrapper">
        <Reveal>
          <div className="jar-display" onClick={drawNote} role="button" tabIndex={0}>
            <div className="jar-lid" />
            <div className="jar-body">
              <div className="jar-tag">
                <span>The Little Love Jar 🍯</span>
                <small>Tap to pick a note</small>
              </div>
              <div className="jar-papers">
                <span className="p-paper p1">❤</span>
                <span className="p-paper p2">✦</span>
                <span className="p-paper p3">💌</span>
                <span className="p-paper p4">💖</span>
              </div>
            </div>
            <div className="jar-glow" />
          </div>
        </Reveal>

        <div className="jar-action-area">
          <button type="button" className="btn pulse jar-draw-btn" onClick={drawNote}>
            {drawnCount === 0 ? '✨ Pick a Reason from the Jar' : '💌 Draw Another Reason'}
          </button>

          {openNote && current && (
            <div className="note-card-reveal">
              <span className="note-tag">Reason #{index + 1} of {reasons.length}</span>
              <p className="note-text">"{current}"</p>
              <span className="note-seal">❤️ From Your Girl</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
