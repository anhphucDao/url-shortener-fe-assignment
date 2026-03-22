import { useState } from 'react'
import axios from 'axios'
function App() {
  const [inputUrl, setInputUrl] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [responseData, setResponseData] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isCopied, setCopied] = useState(false)
  const shorten = async () => {
    setLoading(true)
    setError(false)
    try {
      const response = await axios.get(
        `/api/create.php?format=json&url=${encodeURIComponent(inputUrl)}`
      )
      if (response.data.shorturl) {
        setResponseData(response.data.shorturl)
      } else {
        setError(true)
        console.log(response.data.errormessage)
      }
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  const handleCopy = async () => {
    if (responseData)
      try {
        await navigator.clipboard.writeText(responseData)
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <main className="min-h-screen flex items-center justify-center flex-col text-center">
      <img src="../public/logo.svg" className="fixed w-20 md:w-fit z-10 left-4 md:left-10 top-4" />
      <h1 className="-mt-20 w-[80%] md:w-full md:-mt-24 text-4xl md:text-6xl font-bold text-primary-500">
        Devcamp URL Shortener
      </h1>
      <h2 className="w-[80%] md:w-full text-lg md:text-[28px] mt-5 text-primary-500">
        Simplify, Organize, and Share: URL Management Made Easy
      </h2>
      <div className=" flex flex-col md:flex-row items-start bg-white shadow-[0_0_30px] shadow-primary-100/50 rounded-md w-[90%] md:w-[42%] p-5  mt-8 mb-2 md:min-w-187 text-start gap-5">
        <div className="grow w-full flex flex-col md:block px-2">
          <h2 className="text-primary-500 text-xl font-semibold mb-2 self-center md:self-start">
            Your long URL
          </h2>
          <div className="w-full flex grow h-11 items-center border border-primary-100/30 rounded-md focus-within:border-primary-500">
            <div className="flex h-[90%] items-center">
              <img src="../public/link.svg" className="pl-2 h-5" />
              <div className="h-2/3  w-px bg-primary-100 mx-2"></div>
            </div>
            <input
              required
              onChange={e => setInputUrl(e.target.value)}
              type="text"
              placeholder="Input the URL you want to shorten"
              className="focus:outline-none overflow-hidden grow h-full placeholder:text-primary-300"
            ></input>
          </div>
        </div>
        <button
          disabled={isLoading || inputUrl == ''}
          onClick={shorten}
          className="md:ml-2 hover:cursor-pointer self-center  md:self-start mt-4 md:mt-0 w-fit h-11 md:relative top-9 items-center rounded-lg py-2 px-6 mr-2 text-shade-white font-bold  bg-primary-500 disabled:bg-primary-300"
        >
          Shorten
        </button>
      </div>
      {isError && (
        <div
          className="flex items-center justify-center flex-col min-h-screen min-w-screen absolute z-10 bg-[rgba(220,220,220,0.5)]"
          onClick={() => {
            setError(false)
            setLoading(false)
          }}
        >
          <div
            className="bg-white py-5 px-10 rounded-xl flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <img src="../public/error.png" className="w-20 h-20 mb-4 " />
            <p className="text-primary-500 font-medium ">Something went wrong while shortening</p>
            <button
              className="px-5 py-2 bg-primary-500 font-medium text-white rounded-lg mt-3 hover:cursor-pointer"
              onClick={() => {
                setError(false)
                setLoading(false)
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {!isError && isLoading && responseData != null && (
        <div
          className="flex items-center justify-center flex-col min-h-screen min-w-screen absolute z-10 bg-[rgba(220,220,220,0.5)]"
          onClick={() => {
            setLoading(false)
            setResponseData(null)
          }}
        >
          <div
            className=" bg-white py-8 px-10 rounded-xl flex flex-col items-center overflow-hidden justify-center relative max-w-100"
            onClick={e => e.stopPropagation()}
          >
            <img src="../public/cardbg.svg" className="absolute w-full top-0 " />
            <img src="../public/qricon.svg" className="absolute -left-7 top-8" />
            <img src="../public/qricon.svg" className="absolute -right-7 top-17" />
            <button
              onClick={() => {
                setLoading(false)
                setResponseData(null)
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
      )}
    </main>
  )
}

export default App
