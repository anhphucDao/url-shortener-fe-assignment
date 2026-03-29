import Navbar from './components/Navbar'
import Title from './components/Title'
import InputSection from './components/InputSection'
import ShortenModal from './components/ShortenModal'
import { useState } from 'react'
function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
        <Title />
        <InputSection onShorten={() => setShowModal(true)} />
      </main>
      <ShortenModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default App
