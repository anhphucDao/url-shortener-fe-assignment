import CardDecoration from './card-decoration'
type shortenLinkPopupProps = {
  responseData: string
  imageLoaded: boolean
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>
  isCopied: boolean
  setCopied: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<boolean>>
  resetStates: () => void
}
function ShortenLinkPopup({
  responseData,
  imageLoaded,
  setImageLoaded,
  isCopied,
  setCopied,
  setError,
  resetStates,
}: shortenLinkPopupProps) {
  const handleCopy = async () => {
    if (responseData)
      try {
        await navigator.clipboard.writeText(responseData)
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      } catch {
        setError(true)
      }
  }
  return (
    <div
      className="flex items-center justify-center flex-col min-h-screen min-w-screen absolute z-10 bg-[rgba(220,220,220,0.5)]"
      onClick={() => {
        resetStates()
      }}
    >
      <div
        className=" bg-white py-8 px-10 rounded-xl flex flex-col items-center overflow-hidden justify-center relative max-w-100"
        onClick={e => e.stopPropagation()}
      >
        <CardDecoration />
        <button
          onClick={() => {
            resetStates()
          }}
          className="bg-white rounded-full z-10 p-1.5 absolute top-3 right-3 hover:cursor-pointer"
        >
          <img src="../public/cancel.svg" />
        </button>
        <div className="p-5 bg-white rounded-xl shadow-[0_0_25px] shadow-gray-500 relative">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(responseData)}&size=200x200`}
            className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} md:w-50  md:h-50`}
            onLoad={() => setImageLoaded(true)}
          />
          <a
            download="qrcode.png"
            target="_blank"
            href={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(responseData)}&size=200x200`}
            className="absolute -bottom-3 -right-3 p-1 bg-primary-500 rounded-[50%] hover:cursor-pointer shrink"
          >
            <img src="../public/download.svg" />
          </a>
        </div>
        <h2 className="font-bold text-primary-500 text-2xl mt-8">Link Shortened!</h2>
        <p className="text-primary-500 font-medium text-md mt-2 text-center mb-4">
          Access the “My URL” page to view statistics on your shortened links
        </p>
        <div className="items-start flex grow h-10 w-full overflow-hidden  gap-2">
          <p className="text-primary-500 border px-4 py-1 border-black rounded-lg font-medium text-start grow w-fit">
            {responseData}
          </p>
          <button
            className={`bg-primary-300 p-1.25 rounded-lg hover:bg-primary-500 hover:cursor-pointer transition-all duration-300 ${isCopied ? 'bg-primary-500' : ''}`}
            onClick={handleCopy}
          >
            {isCopied ? <img src="../public/tick.svg" /> : <img src="../public/copy.svg" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShortenLinkPopup
