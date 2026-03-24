import { Link2, X, Copy, ArrowDownToLine } from 'lucide-react'
import { useState } from 'react'
import Loading from './Loading.tsx'
// import OutputCard from './OutputCard.tsx'

export default function ShortenerSection() {
  const [inputUrl, setinputUrl] = useState('')
  const [resultUrl, setResultUrl] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')
  const [pasteStatus, setPasteStatus] = useState('')

  const delayTime = 1000
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
  const handleSubmit = async () => {
    try {
      if (inputUrl === '') return
      setIsSubmited(true)
      setPasteStatus('')
      await delay(delayTime)
      setResultUrl('https://furl.one/myshortenlink')
      setQrCode('mock_QR.jpg')
    } catch (e) {
      console.log('Error: ', e)
    }
  }
  const handlePasteClick = async () => {
    try {
      setinputUrl(await navigator.clipboard.readText())
      setPasteStatus('Paste successfull !')
    } catch (err) {
      setPasteStatus('Paste error: ' + err)
    }
  }
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(resultUrl)
      setCopyStatus('Shorten link is copied !')
    } catch (err) {
      setCopyStatus('Copy error: ' + err)
    }
  }
  const handleQuit = () => {
    setIsSubmited(false)
    setinputUrl('')
    setQrCode('')
    setCopyStatus('')
  }
  const modalContent =
    qrCode !== '' && resultUrl !== '' ? (
      <div className="relative w-100 h-117 z-31 bg-white rounded-[10px]">
        {/* Phần xanh xanh */}
        <div className="w-100 h-49 bg-primary-500 rounded-t-[10px] [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]" />
        <X
          className="absolute right-3 top-3 bg-neutral-100 rounded-full w-8 h-8 hover:cursor-pointer"
          onClick={handleQuit}
        />

        <div className="absolute z-32 w-55 p-3 aspect-square rounded-[10px] bg-white shadow-md shadow-shade-black/20 top-10 justify-self-center">
          <img className="object-contain rounded-[10px]" src={qrCode} alt="QR Code" />
          <div className="absolute flex justify-center items-center -bottom-4 -right-4 bg-primary-500 w-10 h-10 rounded-full text-white hover:cursor-pointer border-2 hover:border-primary-500">
            <ArrowDownToLine />
          </div>
        </div>
        <div className="mt-20 mx-9 text-center text-primary-500">
          <h1 className=" text-[24px] font-bold">Link shortend!</h1>
          <div className="text-[14px] font-medium">
            Access the “My URL” page to view statistics <br /> on your shortened links
          </div>
          <div className="flex flex-row mt-5">
            <input
              type="text"
              value={resultUrl}
              readOnly
              className="h-10 w-69 focus:outline-none border border-primary-500 rounded-[5px] p-3"
            />
            <Copy
              className="h-10 w-10 rounded-[5px] bg-primary-500 text-white ml-1 p-2 hover:cursor-pointer"
              onClick={handleCopyClick}
            />
          </div>
          <p className="font-medium">{copyStatus}</p>
        </div>
      </div>
    ) : (
      <Loading />
    )
  return (
    <main className="min-h-screen flex flex-col gap-8 items-center justify-center font-sans">
      <div className="flex flex-col items-center justify-center text-primary-500">
        <p className="lg:text-[60px] sm:text-[40px] text-[35px] font-bold">Devcamp URL Shortener</p>
        <p className="lg:text-[28px] sm:text-[18px] text-[15px]">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>
      </div>
      {/* Input phase */}
      <div className="w-[60%] min-w-100 lg:h-38 h-26 shadow-[0px_0px_20px] shadow-shade-black/30 rounded-[10px] flex items-center justify-center">
        <div className=" w-[90%]">
          <p className="font-semibold lg:text-[20px] sm:text-[17px] text-[14px] text-primary-500">
            Your long URL
          </p>
          <div className="flex flex-row py-2 gap-2">
            <div className="flex flex-row items-center px-1 w-[80%] border rounded-[10px] border-gray-400 divide-x divide-gray-400">
              <Link2
                className="sm:w-12 w-8 flex-none mr-1 my-2 hover:cursor-pointer"
                onClick={handlePasteClick}
              />
              <input
                className="w-full mx-1 my-2 focus:outline-none"
                value={inputUrl}
                onChange={e => setinputUrl(e.target.value)}
                placeholder="Input the URL you want to shorten"
              />
            </div>
            <button
              className="w-[20%] rounded-[10px] bg-primary-500 font-bold text-white lg:text-[20px] sm:text-[15px] text-[14px] hover:shadow-[0px_0px_10px] shadow-shade-black/30 hover:cursor-pointer"
              disabled={isSubmited}
              onClick={handleSubmit}
            >
              Shorten
            </button>
          </div>
          <p className="font-medium text-primary-500">{pasteStatus}</p>
        </div>
      </div>

      {/* Output phase */}
      {isSubmited ? (
        <div className="bg-shade-black/30 z-30 fixed inset-0 flex items-center justify-center">
          {modalContent}
        </div>
      ) : (
        <></>
      )}
    </main>
  )
}
