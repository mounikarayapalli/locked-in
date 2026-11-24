import { useState, useEffect } from 'react'
import { Reveal } from './common'

export default function LoveCounter() {
  // Start Date: Nov 1, 2022
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const startDate = new Date('2022-11-01T00:00:00')
    const update = () => {
      const now = new Date()
      const diff = Math.max(0, now - startDate)
      const totalSeconds = Math.floor(diff / 1000)
      const days = Math.floor(totalSeconds / 86400)
      const hours = Math.floor((totalSeconds % 86400) / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60
      setElapsed({ days, hours, minutes, seconds })
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section counter-section">
      <Reveal>
        <div className="counter-card">
          <span className="counter-heart-badge">💖 Since November 2022</span>
          <h2 className="script counter-title">Days We've Loved Each Other</h2>
          <p className="counter-sub">Every second with you has been my greatest blessing</p>
          
          <div className="counter-grid">
            <div className="counter-box">
              <span className="counter-num">{elapsed.days.toLocaleString()}</span>
              <span className="counter-label">Days</span>
            </div>
            <div className="counter-box">
              <span className="counter-num">{String(elapsed.hours).padStart(2, '0')}</span>
              <span className="counter-label">Hours</span>
            </div>
            <div className="counter-box">
              <span className="counter-num">{String(elapsed.minutes).padStart(2, '0')}</span>
              <span className="counter-label">Minutes</span>
            </div>
            <div className="counter-box">
              <span className="counter-num pulse-num">{String(elapsed.seconds).padStart(2, '0')}</span>
              <span className="counter-label">Seconds</span>
            </div>
          </div>
          
          <p className="counter-footer">...and counting together forever & always ❤️</p>
        </div>
      </Reveal>
    </section>
  )
}
