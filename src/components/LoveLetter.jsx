import { useState } from 'react'
import { Reveal } from './common'
import { CONFIG } from '../config'

export default function LoveLetter() {
  const [open, setOpen] = useState(false)
  const L = CONFIG.letter
  return (
    <section className="section letter-section">
      <Reveal>
        {!open && (
          <button className="envelope" onClick={() => setOpen(true)}>
            <span className="env-body"><span className="env-flap" /><span className="env-seal">❤</span></span>
            <span className="env-text">{L.button}</span>
          </button>
        )}
      </Reveal>
      <div className={`letter-wrap ${open ? 'open' : ''}`} aria-hidden={!open}>
        <article className="letter">
          <p className="l-greet">{L.greeting}</p>
          {L.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <p className="l-sign">{L.signoff}</p>
        </article>
      </div>
    </section>
  )
}
