import { useState } from 'react'

export const PopUp = ({ isShown, onClose }) => {
  const [copied, setCopied] = useState(false)

  if (!isShown) return null

  const handleCopy = () => {
    navigator.clipboard.writeText('https://furl.one/myshortenlink')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-25 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-100 overflow-hidden animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white hover:bg-primary-300 cursor-pointer text-neutral-500 hover:text-white rounded-full p-1 transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="bg-primary-500 h-32 relative flex justify-center">
          <div className="absolute top-10 bg-white p-3 rounded-xl shadow-lg border border-primary-100">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://fessior.com"
              alt="QR Code"
              className="w-32 h-32"
            />
            <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white p-1.5 rounded-full border-2 border-white cursor-pointer">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
          </div>
        </div>

        <div className="pt-20 pb-8 px-8 text-center">
          <h3 className="text-primary-500 text-xl font-bold mb-2">Link shortened!</h3>
          <p className="text-primary-500 text-xs leading-relaxed mb-6 px-4">
            Access the "My URL" page to view statistics on your shortened links
          </p>

          <div className="relative">
            <div className="flex items-center gap-2 bg-white">
              <span className="text-primary-500 text-sm truncate flex-1 text-left border border-primary-500 rounded-lg p-2 pl-3 h-full flex items-center">
                https://furl.one/myshortenlink
              </span>
              <button
                className="bg-primary-500 text-white p-2.5 rounded-md hover:bg-primary-700 transition-colors"
                onClick={handleCopy}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>

            <div
              className={`absolute -bottom-6 left-0 w-full transition-all duration-300 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            >
              <p className="text-[10px] font-bold text-green-500">Copied to clipboard!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
