import { Link2, X, Copy, ArrowDownToLine } from 'lucide-react'
import Loading from './Loading.tsx'
import { QRCodeSVG } from 'qrcode.react'
import { useUrlShortener } from '../Hooks/useUrlShortener.ts'
import isURL from 'validator/lib/isURL'
import Input from './Input.tsx'

const API_BASE = import.meta.env.API_BASE || 'http://localhost:3000'

export default function ShortenerSection() {
  const {
    inputUrl,
    resultUrl,
    isSubmited,
    copyStatus,
    pasteStatus,
    setResultUrl,
    setInputUrl,
    setIsSubmited,
    setCopyStatus,
    setPasteStatus,
  } = useUrlShortener()

  const handleSubmit = async () => {
    try {
      if (!isURL(inputUrl, { protocols: ['http', 'https'], require_protocol: true })) return
      setIsSubmited(true)
      setPasteStatus('')
      const response = await fetch(`${API_BASE}/shorten`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          longUrl: inputUrl,
        }),
      })
      const result = await response.json()
      const { slug } = result
      const shortenedUrl = `${API_BASE}/${slug}`
      setResultUrl(shortenedUrl)
    } catch (e) {
      console.log('Error: ', e)
    }
  }
  const handlePasteClick = async () => {
    try {
      setInputUrl(await navigator.clipboard.readText())
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
    setInputUrl('')
    setCopyStatus('')
  }

  const modalContent = isSubmited ? (
    <div className="bg-shade-black/30 z-30 fixed inset-0 flex items-center justify-center">
      {resultUrl !== '' ? (
        <div className="relative w-100 h-117 z-31 bg-white rounded-card">
          <div className="w-100 h-49 bg-primary-500 rounded-t-card clip-banner" />
          <X
            className="absolute right-3 top-3 bg-neutral-100 rounded-full w-8 h-8 hover:cursor-pointer"
            onClick={() => handleQuit()}
          />

          <div className="absolute z-32 w-55 p-3 rounded-card bg-white shadow-md shadow-shade-black/20 top-10 justify-self-center">
            <div className="w-full mx-auto">
              <QRCodeSVG value={resultUrl} className="w-full h-auto" size={512} />
            </div>
            <div className="absolute flex justify-center items-center -bottom-6 -right-6 bg-primary-500 w-10 h-10 rounded-full text-white hover:cursor-pointer border-2 hover:border-primary-500">
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
                onClick={() => handleCopyClick()}
              />
            </div>
            <p className="font-medium">{copyStatus}</p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  ) : (
    <></>
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
      <div className="w-[60%] min-w-100 lg:h-38 h-26 shadow-md shadow-shade-black/30 rounded-card flex items-center justify-center">
        <div className=" w-[90%]">
          <p className="font-semibold lg:text-[20px] sm:text-[17px] text-[14px] text-primary-500">
            Your long URL
          </p>
          <div className="flex flex-row py-2 gap-2">
            <div className="flex flex-row items-center px-1 w-[80%] border rounded-card border-gray-400 divide-x divide-gray-400">
              <Link2
                className="sm:w-12 w-8 flex-none mr-1 my-2 hover:cursor-pointer"
                onClick={handlePasteClick}
              />
              <Input
                value={inputUrl}
                onChange={setInputUrl}
                placeholder="Input the URL you want to shorten"
              />
            </div>
            <button
              className="w-[20%] rounded-card bg-primary-500 font-bold text-white lg:text-[20px] sm:text-[15px] text-[14px] hover:shadow-md shadow-shade-black/30 hover:cursor-pointer"
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
      {modalContent}
    </main>
  )
}
