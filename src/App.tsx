<<<<<<< HEAD
import { useState } from 'react'
import devcampLogo from './devcampLogo.png'

function App() {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')

  const handleShorten = () => {
    if (!url) return
    setShortenedUrl(`https://tiny.url/${Math.random().toString(36).substring(7)}`)
  }

  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl)
      alert('Copied to clipboard!')
    }
  }

  return (
    <main className="min-h-screen bg-white font-sans relative overflow-x-hidden">
      {/* Logo và User Profile */}
      <header className="w-full flex justify-between items-center p-6 md:px-12">
        {/* Logo DevCamp */}
        <img src={devcampLogo} alt="DevCamp Logo" className="w-auto h-[74px] object-contain" />

        {/* User Profile */}
        <div className="flex items-center gap-3 bg-[#f2f4f6] border-[3px] border-[#0b2878] rounded-full pl-1 pr-6 py-1">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-[#0b2878] flex items-end justify-center overflow-hidden">
            <svg className="w-9 h-9 text-white mb-[-2px]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="text-left">
            <p className="text-[10px] font-bold text-[#0b2878] opacity-50 uppercase leading-none">
              Personal
            </p>
            <p className="text-[15px] font-[1000] text-[#0b2878] leading-tight">Đàng Tiến Thành</p>
          </div>
        </div>
      </header>

      {/* BODY CONTENT */}
      <div className="flex flex-col items-center justify-center py-12 px-6">
        <div className="w-full max-w-[832px] flex flex-col items-center space-y-2">
          {/* 1. Tiêu đề chính */}
          <h1 className="w-full text-[40px] md:text-[60px] font-black text-[#0b2878] leading-[65px] text-center">
            Devcamp URL shortener
          </h1>

          {/* 2. Tiêu đề phụ */}
          <h2 className="w-full text-[20px] md:text-[28px] font-normal text-[#0b2878] leading-[65px] text-center mb-6">
            Simplify, Organize, and Share: URL Management Made Easy
          </h2>

          <div className="w-full max-w-[800px] min-h-[119px] bg-white rounded-[40px] border border-gray-200 p-8 shadow-lg flex flex-col items-start space-y-4">
            <div className="w-full max-w-[700px] mb-1">
              <h3 className="text-[18px] font-bold text-[#0b2878] ml-1">Your long URL</h3>
            </div>

            {/* 3. Khối Input và Button */}
            <div className="w-full max-w-[700px] flex items-stretch gap-4">
              <div className="flex-[3] flex items-center bg-white rounded-xl border border-gray-300 px-4 py-1 shadow-sm transition-all focus-within:border-[#cbcfdd] focus-within:ring-1 focus-within:ring-[#c8cdd7]">
                <div className="text-[#0b2878] opacity-40 ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="Input the URL you want to shorten"
                  className="flex-1 px-3 py-3 text-base outline-none text-[#0b2878] font-bold placeholder:text-gray-300 bg-transparent"
                />
              </div>

              {/* Nút Shorten */}
              <button
                onClick={handleShorten}
                className="flex-1 bg-[#0b2878] hover:bg-[#1a3a8a] text-white font-black text-lg py-4 rounded-xl transition-all active:scale-95 shadow-md"
              >
                Shorten
              </button>
            </div>
          </div>

          {/* 4. Kết quả */}
          <div className="w-full max-w-[800px]">
            {shortenedUrl && (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
                <div className="w-[400px] bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col relative animate-in fade-in zoom-in duration-300">
                  <div className="bg-[#0b2878] w-full p-8 flex flex-col items-center relative">
                    <button
                      onClick={() => setShortenedUrl('')}
                      className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    <div className="bg-white p-4 rounded-[20px] shadow-lg mt-4">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${shortenedUrl}`}
                        alt="QR Code"
                        className="w-[160px] h-[160px]"
                      />
                    </div>

                    <button className="absolute -bottom-6 w-12 h-12 rounded-full bg-white text-[#0b2878] flex items-center justify-center shadow-xl hover:scale-110 transition-transform border border-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="bg-white w-full p-10 pt-12 flex flex-col items-center">
                    <h3 className="text-2xl font-black text-[#0b2878]">Link shortened!</h3>

                    <p className="text-center text-gray-400 text-sm mt-2 px-6 font-medium">
                      Access the <span className="text-[#0b2878] font-bold">"My URL"</span> page to
                      view statistics on your shortened links
                    </p>

                    <div className="w-full mt-8 flex items-center bg-[#f2f4f6] rounded-xl border border-gray-200 p-1">
                      <div className="flex-1 px-4 py-2 truncate text-sm font-bold text-[#0b2878]">
                        {shortenedUrl}
                      </div>

                      <button
                        onClick={handleCopy}
                        className="bg-[#0b2878] text-white p-3 rounded-lg hover:bg-[#1a3a8a] transition-colors shadow-md"
                        title="Copy to clipboard"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Footer */}
      <footer className="mt-10 pb-10 text-center">
        <p className="text-[#0b2878] font-semibold text-sm italic opacity-30">
          2026 DevCamp Frontend Assignment
        </p>
      </footer>
=======
function App() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-500">URL Shortener</h1>
>>>>>>> d4e4570810bab90a47b72510d71e0b21e780f5e4
    </main>
  )
}

export default App
