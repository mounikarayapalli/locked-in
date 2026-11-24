import { useEffect, useMemo, useRef, useState } from 'react'

// Soft floating hearts + sparkles used as background
export function FloatingHearts({ count = 16, sparkles = true }) {
  const items = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 22,
      delay: -Math.random() * 20,
      dur: 12 + Math.random() * 14,
      sway: (Math.random() - 0.5) * 80,
      spark: sparkles && i % 3 === 0,
    })), [count, sparkles])
  return (
    <div className="floaters" aria-hidden="true">
      {items.map((h) => (
        <span key={h.id} className={h.spark ? 'floater spark' : 'floater'}
          style={{ left: `${h.left}%`, fontSize: h.size, animationDelay: `${h.delay}s`,
                   animationDuration: `${h.dur}s`, '--sway': `${h.sway}px` }}>
          {h.spark ? '✦' : '❤'}
        </span>
      ))}
    </div>
  )
}

// Fades a block in once when it scrolls into view
export function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.15 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`}>{children}</div>
}

export const Heart = ({ className = '' }) => (
  <svg className={`heart-svg ${className}`} viewBox="0 0 100 90" aria-hidden="true">
    <defs>
      <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#e8334f" /><stop offset="1" stopColor="#8b0a1f" />
      </linearGradient>
    </defs>
    <path d="M50 85C10 55 2 35 2 24A23 23 0 0 1 50 16 23 23 0 0 1 98 24c0 11-8 31-48 61z" fill="url(#hg)" stroke="#d9a38f" strokeWidth="1.5" />
    <path d="M18 24c0-6 5-11 11-11" stroke="#fff" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
)
