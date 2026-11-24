import { useState } from 'react'
import LockScreen from './components/LockScreen'
import Hero from './components/Hero'
import LoveCounter from './components/LoveCounter'
import OurJourney from './components/OurJourney'
import MemoryGallery from './components/MemoryGallery'
import VideoMemories from './components/VideoMemories'
import LoveJar from './components/LoveJar'
import BirthdayCake from './components/BirthdayCake'
import LoveLetter from './components/LoveLetter'
import FinalSurprise from './components/FinalSurprise'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  const [unlocked, setUnlocked] = useState(false)

  if (!unlocked) {
    return <LockScreen onUnlock={() => { setUnlocked(true); window.scrollTo(0, 0) }} />
  }

  return (
    <div className="site">
      <Hero />
      <LoveCounter />
      <OurJourney />
      <MemoryGallery />
      <VideoMemories />
      <LoveJar />
      <BirthdayCake />
      <LoveLetter />
      <FinalSurprise />
      <MusicPlayer />
    </div>
  )
}
