import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import qrImage from '../assets/qr.png'

interface ShortenModalProps {
  onClose: () => void
}

function ShortenModal({ onClose }: ShortenModalProps) {
  const [isCopied, setIsCopied] = useState(false)

  const url = 'https://furl.one/myshortenlink'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)

      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Lỗi khi copy text: ', err)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      <div className="h-full w-full absolute top-0 bg-[#B3B3B3] opacity-30" />

      <div className="relative w-80 h-auto bg-white rounded-xl">
        <div className="w-full h-32 bg-primary-500 rounded-t-xl" />
        <button
          className="absolute top-4 right-4 h-6 w-6 text-center bg-[#E6E6E6] hover:bg-[#ffffff] rounded-full cursor-pointer"
          onClick={onClose}
        >
          X
        </button>

        <div className="flex flex-col items-center px-6">
          <div className="relative w-40 h-40 bg-gray-200 rounded-xl shadow-lg -mt-24 mb-4 flex items-center justify-center border-4 border-white">
            <img src={qrImage} alt="QR Code" className="w-full h-full object-contain" />
            <button className="absolute -bottom-4 -right-4 h-8 w-8 text-center bg-primary-500 hover:bg-blue-400 rounded-full cursor-pointer">
              <FontAwesomeIcon icon={faDownload} className="text-white" />
            </button>
          </div>

          <p className="text-[20px] font-bold text-primary-500">Link shortened!</p>
          <p className="w-[80%] text-[12px] font-light text-primary-500 mt-2 text-center">
            Access the “My URL” page to view statistics on your shortened links
          </p>

          <div className="flex flex-row w-full py-4 px-2 mt-4 justify-between">
            <div className="border border-[#0b2878] px-2 py-0.5 h-auto w-[85%] rounded-lg">
              <text className="text-primary-500 text-[12px] font-medium">
                https://furl.one/myshortenlink
              </text>
            </div>
            <button
              className={`size-8 bg-primary-500 rounded-lg ${isCopied ? '' : 'hover:bg-blue-400 cursor-pointer'}`}
              onClick={handleCopy}
            >
              <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShortenModal
