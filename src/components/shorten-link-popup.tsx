import { useState } from 'react'
import CardDecoration from './card-decoration'
import { stopPropagation } from '../utils/events'
import CancelButton from './cancel-button'
import CustomLink from './CustomLink'
import useCopy from '../utils/useCopy'
import { type UrlState } from '../utils/useShortenUrl'
interface ShortenLinkPopupProps {
  data: string
  onReset: () => void
  onError: React.Dispatch<React.SetStateAction<UrlState>>
}
function ShortenLinkPopup({ data, onReset, onError }: ShortenLinkPopupProps) {
  const { handleCopy, isCopied } = useCopy()
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const handleCopyData = async () => {
    try {
      await handleCopy(data)
    } catch {
      onError({
        data: null,
        error: 'Something went wrong',
      })
    }
  }
  const renderCopyIcon = () => {
    return isCopied ? <img src="./tick.svg" alt="Copied" /> : <img src="./copy.svg" alt="Copy" />
  }
  return (
    <div
      className="flex items-center justify-center flex-col min-h-screen min-w-screen absolute z-10  bg-primary-100/50"
      onClick={onReset}
    >
      <div
        className=" bg-white py-8 px-10 rounded-xl flex flex-col items-center overflow-hidden justify-center relative max-w-100"
        onClick={stopPropagation}
      >
        <CardDecoration />
        <CancelButton onReset={onReset} />
        <div className="p-5 bg-white rounded-xl shadow-[0_0_25px] shadow-gray-500 relative">
          <img
            src={`${import.meta.env.VITE_QR_CODE_API_URL}/?data=${encodeURIComponent(data)}&size=200x200`}
            className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} md:w-50  md:h-50`}
            onLoad={() => setImageLoaded(true)}
          />
          <CustomLink
            download="qrcode.png"
            target="_blank"
            href={`${import.meta.env.VITE_QR_CODE_API_URL}/?data=${encodeURIComponent(data)}&size=200x200`}
            className="absolute -bottom-3 -right-3 "
          />
        </div>
        <h2 className="font-bold text-primary-500 text-2xl mt-8">Link Shortened!</h2>
        <p className="text-primary-500 font-medium text-md mt-2 text-center mb-4">
          Access the “My URL” page to view statistics on your shortened links
        </p>
        <div className="items-start flex grow h-10 w-full overflow-hidden  gap-2">
          <p className="text-primary-500 border px-4 py-1 border-black rounded-lg font-medium text-start grow w-fit">
            {data}
          </p>
          <button
            className={`bg-primary-300 p-1.25 rounded-lg hover:bg-primary-500 hover:cursor-pointer transition-all duration-300 ${isCopied ? 'bg-primary-500' : ''}`}
            onClick={handleCopyData}
          >
            {renderCopyIcon()}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShortenLinkPopup
