import CopyButton from './CopyButton'

function Popup({ show, onClose }: { show: boolean; onClose: () => void }) {
  const shortenLink = 'https://furl.one/myshortenlink'
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/QRtest.png'
    link.download = 'QR_Code_Furl.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  if (!show) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40 " onClick={onClose}></div>
      <div className="flex flex-col relative items-start  z-10 bg-white w-100 h-120 rounded-lg overflow-hidden ">
        <img src="/BGPopup.png" alt="BG" className="absolute top-0 left-0  " />
        <img src="/QRleft.png" className="absolute left-0 z-10 w-13 h-20 mt-8" />
        <img src="/QRright.png" className="absolute right-0 z-10 w-13 h-20 mt-16" />
        <div className="bg-white w-55 h-55 rounded-lg z-30 absolute top-0 left-0 mt-10 ml-22.5 shadow-lg ">
          <img src="/QRtest.png" alt="QR code" className="w-50 h-50 mx-2 my-2" />
          <button
            onClick={handleDownload}
            className="absolute -bottom-4 -right-4 flex items-center justify-center w-12 h-12 bg-primary-500 
                    text-white rounded-full  shadow-lg hover:bg-blue-900 transition-colors"
          >
            <img src="/Downloadbutton.png" alt="Share" className="w-6 h-6" />
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-40 flex items-center justify-center 
                w-8 h-8 bg-gray-100 rounded-full  hover:bg-gray-200 transition-colors"
        >
          <img src="/Xbutton.png" alt="X" className="w-3 h-3" />
        </button>

        <div className="absolute bottom-15 w-full text-center px-8 z-20">
          <div className=" text-[24px] font-bold text-primary-500 ">Link shortened!</div>
          <div className="text-[14px] font-medium text-primary-500 mx-8">
            Access the “My URL” page to view statistics on your shortened links
          </div>
          <div className="flex items-center justify-center mt-4 ">
            <input
              type="text"
              value={shortenLink}
              readOnly
              className="flex flex-1 border border-primary-500 rounded-lg 
                                   font-medium text-[16px] text-primary-500 h-10 px-3 "
            />
            <CopyButton textToCopy={shortenLink} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
