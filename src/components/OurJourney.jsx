import { Reveal } from './common'
import { CONFIG } from '../config'

export default function OurJourney() {
  const chapters = CONFIG.journey || []

  return (
    <section className="section journey-section" id="journey">
      <Reveal>
        <h2 className="script section-title light">Our Story So Far</h2>
        <p className="journey-subtitle">No dates needed... every chapter with you is etched permanently in my heart</p>
      </Reveal>

      <div className="timeline-container">
        <div className="timeline-spine" />
        {chapters.map((ch, i) => (
          <Reveal key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-node">
              <span className="node-icon">{ch.icon || '❤'}</span>
            </div>
            <div className="timeline-card">
              <span className="timeline-chapter-badge">{ch.badge}</span>
              <h3 className="timeline-heading">{ch.title}</h3>
              <p className="timeline-body">{ch.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
