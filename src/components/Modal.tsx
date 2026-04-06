import { useState, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

type ModalProps = {
  shortUrl: string
  onClose: () => void
}

export default function Modal({ shortUrl, onClose }: ModalProps) {
  const [copied, setCopied] = useState(false)
  const qrRef = useRef<HTMLCanvasElement>(null)
  // hàm copy
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl) // copy vào bộ nhớ tạm
    setCopied(true) // cho biến copied true
    setTimeout(() => setCopied(false), 2000) // sau 2s biến copied thành false
  }

  const handleDownload = () => {
    const canvas = qrRef.current
    if (!canvas) return
    const url = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = url
    link.download = 'qrcode.png'
    link.click()
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-[320px] relative overflow-hidden shadow-2xl"
        style={{ animation: 'slideUp 0.28s cubic-bezier(0.34,1.56,0.64,1)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:scale-110 transition-transform z-10 shadow-md text-sm font-bold"
        >
          x
        </button>

        {/* Nền xanh */}
        <div className="bg-[#0B2878] pt-10 px-8 pb-10 flex flex-col items-center relative">
          {/* Decorative corner squares */}
          <div className="absolute top-4 left-4 w-10 h-10 border-[3px] border-white/20 rounded-md" />
          <div className="absolute top-4 left-16 w-5 h-5 border-[3px] border-white/15 rounded-sm" />
          <div className="absolute bottom-12 right-4 w-12 h-12 border-[3px] border-white/20 rounded-md" />
          <div className="absolute bottom-24 right-4 w-5 h-5 bg-white/10 rounded-sm" />

          {/* Tạo Qr code từ biến shortUrl */}
          <div className="bg-white rounded-2xl p-4 shadow-xl">
            <QRCodeCanvas
              ref={qrRef}
              value={shortUrl}
              size={180}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
          </div>

          {/* Nút download */}
          <button
            onClick={handleDownload} // bấm vào sẽ chạy hàm ở trên
            className="absolute -bottom-5 right-12 w-11 h-11 rounded-full bg-[#1a3ba5] hover:bg-[#0B2878] flex items-center justify-center shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4h14v-2H5v2z" />
            </svg>
          </button>
        </div>

        {/* Phần trắng dứoi */}
        <div className="px-6 pt-8 pb-7 text-center">
          <h2 className="text-[#0B2878] font-extrabold text-xl mb-2 tracking-tight">
            Link shortened!
          </h2>
          <p className="text-[#0B2878] font-semibold text-[13px] leading-snug mb-5">
            Access the "My URL" page to view statistics
            <br />
            on your shortened links
          </p>

          {/* URL row */}
          <div className="flex items-center gap-2">
            <div className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-left overflow-hidden">
              <span className="text-sm text-gray-600 truncate block">{shortUrl}</span>
            </div>
            <button
              onClick={handleCopy} // click vào thì chạy hàm
              className={`w-11 h-11 min-w-[44px] rounded-xl flex items-center justify-center transition-all active:scale-95 ${
                copied ? 'bg-green-500' : 'bg-[#0B2878] hover:bg-[#1a3ba5]'
              }`} // biến copied true thì thành màu xanh, false thì màu xanh dương
            >
              {copied ? (
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 12-12-1.4-1.4z" />{' '}
                  {/* copied true thì icon tick */}
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />{' '}
                  {/* copied false thì icon copy */}
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
