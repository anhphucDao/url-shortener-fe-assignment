import { useState } from 'react'
import { Button } from './Button'
import { PopUp } from './PopUp'
import { LinkIcon } from '../assets/icons/LinkIcon'
export const ShortenContainer = () => {
  const [showPop, setShowPop] = useState(false)
  const handleShowPop = () => setShowPop(true)
  const handleClosePop = () => setShowPop(false)
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-96px)] bg-white px-4">
      <div className="text-center mb-12">
        <h1 className="text-[56px] font-black text-primary-500 leading-tight mb-4">
          Devcamp URL Shortener
        </h1>
        <p className="text-[20px] text-primary-500 font-medium opacity-90">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>
      </div>
      <div className="w-full max-w-208 bg-white rounded-[20px] p-10 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-50">
        <h3 className="text-primary-500 font-bold text-lg mb-4 ml-1">Your long URL</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1 flex items-center border border-slate-200 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <LinkIcon />
            <div className="h-6 w-px bg-slate-200 mx-3"></div>
            <input
              type="text"
              placeholder="Input the URL you want to shorten"
              className="w-full outline-none text-slate-600 placeholder:text-slate-300 bg-transparent"
            />
          </div>
          <Button onClick={handleShowPop} />
        </div>
      </div>
      <PopUp isShown={showPop} onClose={handleClosePop} />
    </main>
  )
}
