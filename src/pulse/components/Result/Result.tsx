import React from 'react'

interface ResultViewProps {
  displayUrl: string
  shortUrl: string
  onReset: () => void
}

const ResultView: React.FC<ResultViewProps> = ({ displayUrl, shortUrl, onReset }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      alert('Đã sao chép link thật!')
    } catch {
      alert('Không thể sao chép link.')
    }
  }

  const handleOpen = () => {
    window.open(shortUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="w-full max-w-2xl animate-in fade-in zoom-in duration-300">
      <div className="bg-[#e0f7f4] p-3 flex items-center gap-3 shadow-inner rounded-full border border-[#b2ebe2]">
        <div className="flex-1 bg-white p-4 rounded-md shadow-sm border border-gray-200 overflow-hidden">
          <span className="text-black font-serif font-bold text-2xl break-all">{displayUrl}</span>
        </div>

        <button
          onClick={handleCopy}
          className="bg-[#0c6b5e] hover:opacity-90 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 text-xl shadow-md min-w-[100px]"
        >
          Copy
        </button>
        <button
          onClick={handleOpen}
          className="bg-[#0c6b5e] hover:opacity-90 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 text-xl shadow-md min-w-[100px]"
        >
          Open
        </button>
      </div>

      <div className="text-center mt-6">
        <button onClick={onReset} className="text-gray-500 hover:text-[#0c6b5e] underline text-sm">
          Rút gọn link khác
        </button>
      </div>
    </div>
  )
}

export default ResultView
