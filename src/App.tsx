import Navbar from './components/Navbar'
import Popup from './components/Popup'
import Maincontent from './components/Maincontent'
import { useState } from 'react'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <div className="flex  flex-col h-screen ">
      <Navbar />
      <Maincontent onOpenPopup={() => setShowPopup(true)} />
      <Popup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}

export default App
