import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logoImage from './assets/devcamp_logo.png'

import ShortenModal from './components/ShortenModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-4 w-full h-10 flex flex-row justify-between mx-4">
        <img src={logoImage} alt="QR Code" className="w-auto h-full object-contain ml-4" />
        <div className="flex flex-row items-center w-max h-10 border border-[#0b2878] mr-4 pr-6 rounded-full">
          <div className="flex h-full w-10 bg-primary-500 rounded-full justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="text-white" />
          </div>

          <div className="flex flex-col ml-2 pr-3 justify-center">
            <span className="text-[10px] text-gray-500 leading-none mb-1">Personal</span>
            <span className="text-sm font-bold text-gray-500 leading-none">Username</span>
          </div>
        </div>
      </div>

      <h1 className="text-[40px] font-bold text-primary-500">DevCamp URL Shortener</h1>
      <p className="text-xl font-light text-primary-500 mt-2">
        Simplify, Organize, and Share: URL Management Made Easy
      </p>

      <div className="flex flex-col gap-4 bg-white w-180 h-auto border border-gray-100 mt-6 shadow-2xl p-4 rounded-lg">
        <p className="text-[20px] font-bold text-primary-500">Your long URL</p>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row w-[85%] border rounded-lg border-[#E3E3E3] p-2 gap-2 items-center">
            <FontAwesomeIcon
              icon={faLink}
              className="w-5 h-5 text-primary-500 pr-2 border-r-2 border-[#E3E3E3]"
            />
            <input
              className="flex-1 outline-none"
              placeholder="Input the URL you want to shorten."
            />
          </div>

          <button
            className="bg-primary-500 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-primary-500 text-white font-bold px-5 rounded-lg cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Shorten
          </button>
        </div>
      </div>

      {isModalOpen && <ShortenModal onClose={() => setIsModalOpen(false)} />}
    </main>
  )
}

export default App
