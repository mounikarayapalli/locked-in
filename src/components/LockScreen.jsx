import { useState } from 'react'
import { FloatingHearts, Heart } from './common'
import { CONFIG } from '../config'

export default function LockScreen({ onUnlock }) {
  const [val, setVal] = useState('')
  const [wrong, setWrong] = useState(false)
  const [leaving, setLeaving] = useState(false)

  const change = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, 4)
    setVal(v); setWrong(false)
    if (v.length < 4) return
    if (v === CONFIG.password) {
      setLeaving(true); setTimeout(onUnlock, 1100)
    } else {
      setWrong(true); setTimeout(() => setVal(''), 600)
    }
  }

  return (
    <main className={`lock ${leaving ? 'leaving' : ''}`}>
      <FloatingHearts count={22} />
      <div className="lock-card">
        <Heart className="lock-heart" />
        <h1 className="script">I think you know the code, NANAA ❤️</h1>
        <label className={`pin ${wrong ? 'shake' : ''}`}>
          <input type="tel" inputMode="numeric" autoComplete="off" autoFocus maxLength={4}
            value={val} onChange={change} aria-label="4 digit code" />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`pin-box ${val.length === i ? 'active' : ''} ${val[i] ? 'filled' : ''}`}>
              {val[i] ? '❤' : ''}
            </span>
          ))}
        </label>
        <p className="lock-msg" role="status">
          {wrong ? 'Umm... I think you know this better than anyone! Try again, Nanaa ❤️' : 'Type the 4 digits'}
        </p>
      </div>
    </main>
  )
}
