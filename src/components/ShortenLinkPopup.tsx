import { useState } from 'react'
import CardDecoration from './CardDecoration'
import { stopPropagation } from '../utils/events'
import Button from './Button'
import CustomLink from './CustomLink'
import useCopy from '../hooks/useCopy'
import { type UrlState } from '../hooks/useShortenUrl'
import { QR_API_URL } from '../constants'
import OverlayBackground from './OverlayBackground'
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
      onError({ data: null, error: 'Failed to copy', isSuccess: false })
    }
  }
  const renderCopyIcon = () => {
    return isCopied ? './tick.svg' : './copy.svg'
  }
  return (
    <OverlayBackground onReset={onReset}>
      <div
        className=" bg-white py-8 px-10 rounded-xl flex flex-col items-center overflow-hidden justify-center relative max-w-100"
        onClick={stopPropagation}
      >
        <CardDecoration />
        <Button
          onClick={onReset}
          className="bg-white z-10 absolute top-3 right-3"
          shape="round"
          size="sm"
          icon="/cancel.svg"
        />
        <div className="p-5 bg-white rounded-xl shadow-[0_0_25px] shadow-gray-500 relative">
          <img
            src={`${QR_API_URL}/?data=${encodeURIComponent(data)}&size=200x200`}
            className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} md:w-50  md:h-50`}
            onLoad={() => setImageLoaded(true)}
          />
          <CustomLink
            download="qrcode.png"
            target="_blank"
            href={`${QR_API_URL}/?data=${encodeURIComponent(data)}&size=200x200`}
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
          <Button
            className={`bg-primary-300 hover:bg-primary-500 ${isCopied ? 'bg-primary-500' : ''}`}
            shape="square"
            size="sm"
            width="fit"
            onClick={handleCopyData}
            icon={renderCopyIcon()}
          />
        </div>
      </div>
    </OverlayBackground>
  )
}

export default ShortenLinkPopup
