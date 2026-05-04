import React, { useState } from 'react'

interface ResultViewProps {
  shortUrl: string
  onReset: () => void
}

const ResultView: React.FC<ResultViewProps> = ({ shortUrl, onReset }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Lỗi sao chép:', err)
      alert('Không thể sao chép liên kết.')
    }
  }

  const handleOpen = () => {
    window.open(shortUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="w-full max-w-2xl mx-auto animate-in fade-in zoom-in duration-500">
      <div className="bg-[#7df3e1] p-5 rounded-lg flex items-center gap-4 shadow-lg">
        <div className="flex-1 bg-white p-4 rounded-md shadow-inner overflow-hidden">
          <span className="text-gray-800 font-mono font-bold text-lg truncate block">
            {shortUrl}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className={`${copied ? 'bg-green-500' : 'bg-[#63d9c6]'} hover:opacity-90 text-white font-bold py-3 px-6 rounded-md transition-all duration-200 shadow-sm min-w-[100px]`}
          >
            {copied ? 'Đã chép!' : 'Copy'}
          </button>

          <button
            onClick={handleOpen}
            className="bg-[#63d9c6] hover:opacity-90 text-white font-bold py-3 px-6 rounded-md transition-all duration-200 shadow-sm"
          >
            Mở Link
          </button>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onReset}
          className="text-gray-500 hover:text-[#63d9c6] font-medium transition-colors underline decoration-dotted underline-offset-4"
        >
          Tạo thêm link khác
        </button>
      </div>
    </div>
  )
}

export default ResultView
