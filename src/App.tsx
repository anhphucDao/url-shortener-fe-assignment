import Navbar from './components/Navbar'
import Popup from './components/Popup'
import { useState } from 'react'
function App() {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <div className="flex  flex-col h-screen ">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center mb-40">
        <h1 className="text-[60px] font-bold text-primary-500">Devcamp URL Shortener</h1>

        <div className="my-2.5 text-[28px] text-primary-500">
          {' '}
          Simplify, Organize, and Share: URL Management Made Easy
        </div>
        <div className="p-4">
          <div
            className="flex  flex-col justify-center w-200 h-29.75 rounded-lg bg-white shadow-[0_0px_50px_rgba(11,40,120,0.4)]  
                            border border-[#7E7E7E]/30 px-7 py-5"
          >
            <div>
              <div className="font-semibold text-xl text-primary-500">Your long URL</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between border border-gray-200  rounded-md flex-1 focus-within:border-primary-500">
                  <img
                    src="/public/mail.png"
                    alt="mail"
                    className="w-5 h-5 flex items-center mt-2.75 mb-2.75 ml-2  "
                  />
                  <div className="w-px h-6.5 bg-gray-300 mx-3"></div>
                  <input
                    type="text"
                    placeholder="Input the URL you want to shorten"
                    className="flex-1 mt-3 mb-3 placeholder-opacity-100 
                    text-primary-300 focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-primary-500 text-white  font-bold  w-24.5 h-10.5 rounded-md ml-9.5 
                    hover:bg-blue-900 transition-colors hover:cursor-pointer"
                >
                  Shorten
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Popup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}

export default App
