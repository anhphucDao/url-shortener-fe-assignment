import { useState, useCallback } from 'react'
import closeIcon from '../assets/close.svg'
import qrCodeImg from '../assets/image 101.svg'
import downloadIcon from '../assets/vertical_align_bottom.svg'

interface ResultModalProps {
  isOpen: boolean
  shortenedUrl: string
  onClose: () => void
}

function ResultModal({ isOpen, shortenedUrl, onClose }: ResultModalProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }, [shortenedUrl])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-white shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {}
        <div
          className="absolute top-0 left-0 h-[55%] w-full bg-[#0B2878]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
        />

        {}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 transition-transform hover:scale-110"
          aria-label="Close"
        >
          <img src={closeIcon} className="h-4 w-4 opacity-70" alt="Close" />
        </button>

        {}
        <div className="relative z-10 flex flex-col items-center pt-16 pb-8">
          <div className="relative rounded-[24px] bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
            <img src={qrCodeImg} alt="QR Code" className="h-48 w-48 object-contain" />

            {}
            <button
              className="absolute -right-4 -bottom-4 flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-[#0B2878] shadow-lg ring-[6px] ring-white transition-transform hover:scale-110"
              aria-label="Download QR"
            >
              <img src={downloadIcon} alt="Download" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {}
        <div className="px-8 pt-2 pb-10">
          <h3 className="text-center text-2xl font-black text-[#0B2878]">Link shortened!</h3>
          <p className="mx-auto mt-3 mb-8 text-center text-[15px] font-medium leading-relaxed text-[#0B2878]">
            Access the &ldquo;My URL&rdquo; page to view statistics
            <br />
            on your shortened links
          </p>

          {}
          <div className="flex items-stretch gap-3">
            <div className="flex flex-1 items-center overflow-hidden rounded-xl border-[2px] border-[#0B2878] bg-white px-4 py-3">
              <p className="truncate text-base font-semibold text-[#0B2878]">{shortenedUrl}</p>
            </div>
            <button
              onClick={handleCopy}
              className={`
                flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-xl transition-all duration-200 active:scale-95
                ${copied ? 'bg-green-600' : 'bg-[#0B2878] hover:bg-[#091f60]'}
              `}
              aria-label={copied ? 'Copied' : 'Copy'}
            >
              {copied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultModal
