import React, { useState } from 'react'
import { IoCopySharp } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'
import { IoCloudDownloadOutline } from 'react-icons/io5'

interface PopUpModalProps {
  onClose: () => void
  shortUrl: string
}
const PopUpModal: React.FC<PopUpModalProps> = ({ onClose, shortUrl }) => {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${shortUrl}`
  const handleDownload = () => {}
  return (
    <div className="fixed flex flex-col inset-0 bg-black/40 items-center justify-center z-50 p-4">
      <div
        className="
                bg-white rounded-xl 
                shadow-[0_0_30px_5px_rgba(0,34,101,.2)]
                flex flex-col max-w-2xl 
                 relative
                "
      >
        <div className="bg-[#002265] p-10 flex flex-col items-center justify-center relative rounded-t-lg">
          <div className="bg-white justify-center items-center p-4 relative rounded-2xl shadow-lg mt-6">
            {isImageLoading && (
              <div className=" animate-spin rounded-full h-8 w-8 border-b-2 border-[#002265]"></div>
            )}
            <img
              src={qrImageUrl}
              alt="QR Code"
              className="w-32 h-32"
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
          <button
            onClick={handleDownload}
            className="absolute bottom-7 right-18  h-7 w-7 rounded-3xl bg-white shadow-[0_0_30px_5px_rgba(0,34,101,.2)] p-1.5 justify-center items-center hover:scale-110 duration-300 transition-all hover:bg-gray-200 border-[.5px]"
          >
            <IoCloudDownloadOutline />
          </button>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-7 h-7 
                    rounded-3xl bg-white p-1.5 flex justify-center items-center duration:300
                    text-gray-400  transition-colors 
                    hover:scale-110 active:scale-95 hover:bg-gray-200"
          >
            <RxCross1 className="text-md" />
          </button>
        </div>
        <div
          className="
                        flex flex-col justify-center items-center mt-2
                    "
        >
          <p className="text-primary-500 font-bold text-xl">Link Shortened!</p>
          <p className="mt-2 text-primary-500 font-medium text-sm ">
            Access the “My URL” page to view statistics
          </p>
          <p className="text-primary-500 font-medium text-sm ">on your shortened links</p>
          <div className="flex justify-center align-center gap-2 p-4 mb-5">
            <input
              readOnly
              value={shortUrl}
              className="
                                bg-white border rounded-md             border-gray-400 w-60 p-2
                                hover:border-primary-500 hover:border-2
                                transition-colors duration-200"
            />
            <button
              onClick={() => navigator.clipboard.writeText(shortUrl)}
              className="
                                justify-center items-center 
                                bg-primary-500 rounded-md p-2
                                hover:scale-110 duration-300 
                                transition-all active:scale-95
                                hover:bg-blue-600 hover:shadow-xl"
            >
              <IoCopySharp className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PopUpModal
