import Button from './Button'
import Input from './Input'
import { DEFAULT_SHORTEN_LINK } from '../utils/constants'

interface PopupProperties {
  show: boolean
  onClose: () => void
}

function Popup({ show, onClose }: PopupProperties) {
  if (!show) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40 " onClick={onClose}></div>
      <div className="flex flex-col relative items-start  z-10 bg-white w-100 h-120 rounded-lg overflow-hidden ">
        <img src="/bgpopup.png" alt="BG" className="absolute top-0 left-0  " />
        <img src="/qrleft.png" className="absolute left-0 z-10 w-13 h-20 mt-8" />
        <img src="/qrright.png" className="absolute right-0 z-10 w-13 h-20 mt-16" />
        <div className="bg-white w-55 h-55 rounded-lg z-30 absolute top-0 left-0 mt-10 ml-22.5 shadow-lg ">
          <img src="/qrtest.png" alt="QR code" className="w-50 h-50 mx-2 my-2" />
          <Button
            Type="download"
            fileUrl="/qrtest.png"
            fileName="QR_Code_Furl.png"
            useImage="/downloadbutton.png"
            className="absolute -bottom-4 -right-4 w-10 h-10 shadow-lg p-3"
          />
        </div>
        <Button
          onClick={onClose}
          variant="gray"
          shape="circle"
          useImage="/xbutton.png"
          className="absolute top-4 right-4 z-40 w-8 h-8 p-2"
        />

        <div className="absolute bottom-15 w-full text-center px-8 z-20">
          <div className=" text-[24px] font-bold text-primary-500 ">Link shortened!</div>
          <div className="text-[14px] font-medium text-primary-500 mx-8">
            Access the “My URL” page to view statistics on your shortened links
          </div>
          <div className="flex items-center justify-center mt-4 ">
            <Input
              value={DEFAULT_SHORTEN_LINK}
              readOnly
              className="border border-primary-500 rounded-lg 
              font-medium text-[16px] h-10 p-3 "
            />
            <Button
              Type="copy"
              shape="quadrilateral"
              useImage="/copybutton.png"
              textToCopy={DEFAULT_SHORTEN_LINK}
              className="w-10 h-10 ml-1 p-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
