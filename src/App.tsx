import Navbar from './components/Navbar'
import Popup from './components/Popup'
import Maincontent from './components/Maincontent'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <div className="flex  flex-col h-screen ">
      <Navbar />
      <Maincontent onOpenPopup={() => setShowPopup(true)} />
      <Popup show={showPopup} onClose={() => setShowPopup(false)} />

      <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={true} />
    </div>
  )
}

export default App
