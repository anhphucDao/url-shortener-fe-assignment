import { useState } from 'react'

// 1. Define the prop types clearly
interface ResultModalProps {
  isOpen: boolean
  onClose: () => void
  shortUrl: string
}

// 2. Apply the interface to the component props
export const ResultModal = ({ isOpen, onClose, shortUrl }: ResultModalProps) => {
  // TypeScript automatically infers this as boolean, no need for <boolean>
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleClose = () => {
    setCopied(false)
    onClose()
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-4 font-sans">
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-[480px] overflow-hidden relative transform transition-all flex flex-col items-center">
        <div
          className="w-full h-[260px] bg-primary-500 relative z-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }}
        >
          <img
            src="/qr-bg.svg"
            alt=""
            className="absolute -top-10 -left-10 w-24 h-24 text-secondary-200 opacity-30"
          />
          <img
            src="/qr-bg.svg"
            alt=""
            className="absolute top-8 right-8 w-36 h-36 text-secondary-200 opacity-30"
          />
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-secondary-200/50 hover:bg-secondary-200/70 text-white transition-colors z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="w-full bg-white px-[30px] pt-[120px] pb-[40px] flex flex-col items-center text-center relative z-0">
          <label className="block text-[28px] font-semibold text-primary-500 mb-2 leading-tight">
            Link shortened!
          </label>
          <p className="text-[14px] text-primary-500 max-w-[340px] mb-[30px] leading-tight">
            Access the "My URL" page to view statistics <br /> on your shortened links
          </p>
          <div className="flex border-color-primary-500 items-center gap-3 w-full max-w-[400px]">
            <div className="flex-1 flex items-center h-[48px] bg-white border border-neutral-100 rounded-[8px] px-4">
              <span className="text-[14px] text-primary-500 font-medium break-all truncate">
                {shortUrl}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="h-[48px] w-[48px] rounded-[8px] bg-primary-500 text-white flex items-center justify-center shrink-0 hover:bg-primary-500/90 active:scale-95 transition-all relative"
            >
              <img src="/copy.svg" alt="Copy" className="w-5 h-5" />
              {copied && (
                <span className="absolute -top-10 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg animate-fade-in-up">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="absolute top-[100px] z-10 flex items-end">
          <div className="bg-white rounded-[20px] p-4 shadow-[0_12px_48px_rgba(0,0,0,0.18)] flex items-center justify-center">
            <img src="/qr.jpg" alt="QR Code" className="w-[220px] h-[220px]" />
          </div>
          <button className="h-[48px] w-[48px] rounded-full bg-primary-500 text-white flex items-center justify-center shrink-0 hover:bg-primary-500/90 active:scale-95 transition-all -ml-6 -mb-4 shadow-xl">
            <img src="/download.svg" alt="Download" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
