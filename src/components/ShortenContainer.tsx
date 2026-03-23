import { useState } from 'react'
import { Button } from './Button'
import { PopUp } from './PopUp'
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer text-primary-500"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.75 8.625C5.85489 8.625 4.99645 8.98058 4.36351 9.61351C3.73058 10.2465 3.375 11.1049 3.375 12C3.375 12.8951 3.73058 13.7536 4.36351 14.3865C4.99645 15.0194 5.85489 15.375 6.75 15.375H10.5309V17.625H6.75C5.25816 17.625 3.82742 17.0324 2.77252 15.9775C1.71763 14.9226 1.125 13.4918 1.125 12C1.125 10.5082 1.71763 9.07742 2.77252 8.02252C3.82742 6.96763 5.25816 6.375 6.75 6.375H10.4723V8.625H6.75Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.5276 6.375H17.2499C18.7418 6.375 20.1725 6.96763 21.2274 8.02252C22.2823 9.07742 22.8749 10.5082 22.8749 12C22.8749 13.4918 22.2823 14.9226 21.2274 15.9775C20.1725 17.0324 18.7418 17.625 17.2499 17.625H13.469V15.375H17.2499C18.145 15.375 19.0035 15.0194 19.6364 14.3865C20.2694 13.7536 20.6249 12.8951 20.6249 12C20.6249 11.1049 20.2694 10.2464 19.6364 9.61351C19.0035 8.98058 18.145 8.625 17.2499 8.625H13.5276V6.375Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.80005 10.875H17.2935V13.125H6.80005V10.875Z"
                fill="currentColor"
              />
            </svg>
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
