import { FloatingHearts } from './common'
import { CONFIG, img } from '../config'

export default function Hero() {
  const h = CONFIG.hero
  return (
    <section className="hero" id="top">
      <FloatingHearts count={14} />
      <div className="hero-photo">
        <span className="orbit o1">❤</span><span className="orbit o2">❤</span><span className="orbit o3">✦</span>
        <img src={img(h.image)} alt="Us together" />
      </div>
      <h1 className="script hero-title">{h.title}</h1>
      <p className="hero-sub">{h.subtitle}</p>
      <button className="btn pulse" onClick={() => document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })}>
        {h.button}
      </button>
    </section>
  )
}
