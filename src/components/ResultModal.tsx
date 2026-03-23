import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

interface ResultModalProps {
  isOpen: boolean
  onClose: () => void
  shortUrl: string
}
function QRCodeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="grey"
      strokeWidth="1.5"
      className={className}
      style={{ opacity: 0.18 }} // Đặt opacity thấp để tạo hiệu ứng mờ nhẹ
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5c-.621 0-1.125-.504-1.125-1.125v-4.5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.625 14.625h2.25M13.5 16.875h2.25M13.5 19.125h2.25M16.875 14.625h2.25M19.125 14.625h2.25M16.875 19.125h2.25M19.125 16.875h2.25M19.125 19.125h2.25"
      />
    </svg>
  )
}

export default function ResultModal({ isOpen, onClose, shortUrl }: ResultModalProps) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Lỗi khi copy: ', err)
    }
  }

  return (
    // 1. Lớp phủ đen mờ (Overlay)
    <div className="fixed inset-0 bg-neutral-900/40 flex justify-center items-center z-50 p-4">
      {/* 2. Khung Modal chính */}
      <div className="bg-white rounded-2xl w-full max-w-sm flex flex-col relative overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white text-neutral-500 hover:text-neutral-900 rounded-full p-1 shadow-sm transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 3. Phần Header màu xanh đậm của Modal */}
        <div className="bg-primary-500 h-36 w-full relative [clip-path:polygon(0_0,100%_0,100%_70%,0_100%)]">
          <QRCodeIcon className="absolute top-4 left-4 w-12 h-12" />
          <QRCodeIcon className="absolute bottom-4 right-12 w-12 h-12" />
        </div>

        {/* 4. Phần Nội dung (Màu trắng) */}
        <div className="px-6 pb-8 pt-28 flex flex-col items-center text-center relative">
          {/* 5. Khối chứa QR Code (Kỹ thuật: Dùng absolute và -top-20 để vắt ngang giữa màu xanh và trắng) */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white p-3 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <QRCodeSVG value={shortUrl} size={140} />
            <button className="absolute -bottom-3 -right-3 bg-primary-500 text-white rounded-full p-2 border-4 border-white shadow-sm hover:bg-primary-700 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>

          <h2 className="text-xl font-bold text-primary-500 mb-2 tracking-tight">
            Link shortened!
          </h2>
          <p className="text-sm text-primary-500/80 mb-6 px-4 font-medium">
            Access the "My URL" page to view statistics
            <br />
            on your shortened links
          </p>

          {/* 6. Ô chứa link và nút Copy */}
          <div className="w-full flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 border-2 border-primary-500 text-primary-500 font-semibold rounded-lg py-2.5 px-3 focus:outline-none text-sm bg-transparent"
            />
            <button
              onClick={handleCopy}
              className="bg-primary-500 text-white p-2.5 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center flex-shrink-0"
              title="Copy to clipboard"
            >
              {copied ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
