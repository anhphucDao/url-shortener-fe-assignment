import { Logo, UserIcon, LinkIcon, DownloadIcon, CopyIcon, CloseIcon } from './components/Icons'
import { useState } from 'react'
import QrCode from './assets/qr.png'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [url, setUrl] = useState('')
  const [showQR, setShowQR] = useState(false)

  const [shortenedUrl, setShortenedUrl] = useState('')

  const handleShorten = async () => {
    if (!url.trim()) return

    try {
      const response = await axios.post(`${API_URL}/api/urls`, {
        originalUrl: url,
        shortCode: Math.random().toString(36).substring(2, 7),
      })

      const data = response.data
      const fullShortLink = `${API_URL}/${data.shortCode}`
      setShortenedUrl(fullShortLink)
      setShowQR(true)

      console.log('Shortened URL: ', fullShortLink)
    } catch (error) {
      console.error('API Error:', error)
      alert('Shortening error')
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div
        id="header"
        className="fixed z-10 w-full flex justify-between items-center p-5 md:py-3.5 lg:px-7 lg:py-5 bg-white"
      >
        <Logo className="" />
        <div className="border border-primary flex w-full items-center rounded-full lg:w-[170px] me-3 ms-5">
          <div className="flex w-full items-center pe-3">
            <UserIcon className="" />
            <div className="flex flex-col">
              <span className="text-[12px] font-normal text-[#5B5B5B] font-sans">Personal</span>
              <span className="text-[20px] font-medium text-[#5B5B5B] font-sans">Username</span>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col items-center justify-center gap-[10px]">
        <span className="text-[60px] font-bold text-primary-500 font-sans">
          Devcamp URL Shortener
        </span>
        <span className="text-[28px] font-normal text-primary-500 font-sans">
          Simplify, Organize, and Share: URL Management Made Easy
        </span>
        <div className="items-start w-full max-w-[800px] mx-auto h-[119px] bg-white border border-[#7E7E7E]/30 rounded-lg shadow-[0px_4px_47px_0_rgba(11,40,120,0.3)] p-6">
          <div className="items-start md:flex">
            <div className="md:grow">
              <div>
                <span className="text-[20px] font-semibold text-primary-500 font-sans">
                  Your long URL
                </span>
                <div className="flex flex-row max-w-[608px] h-[42px] bg-white border border-[#7E7E7E]/30 rounded-lg">
                  <div className="flex items-center gap-2 px-[8px] py-[11px] w-full h-11">
                    <LinkIcon className="" />
                    <input
                      value={url}
                      onChange={e => setUrl(e.target.value)}
                      className="flex-1 w-full text-[12px] font-normal text-primary-300 font-sans outline-none h-full grow"
                      placeholder="Input the URL you want to shorten"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              disabled={!url}
              onClick={handleShorten}
              className={
                !url
                  ? 'w-fit bg-[#9da9c9] text-[#0b2878] cursor-not-allowed opacity-75 text-base px-3 py-2 rounded-lg flex min-w-fit items-center justify-center duration-100 md:relative md:top-8'
                  : 'w-fit bg-[#0b2878] text-white text-base px-3 py-2 rounded-lg flex min-w-fit items-center justify-center duration-100 md:relative md:top-8'
              }
            >
              Shorten
            </button>
          </div>
        </div>
      </main>
      {showQR && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/30">
          <div className="relative mx-3 flex aspect-[9/10] w-[400px] rounded-lg bg-primary-500 overflow-hidden">
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-between px-5 py-10 md:p-10">
              <div className="relative flex aspect-square h-1/2 items-center justify-center rounded-lg bg-white p-3 shadow-[0px_4px_12px_0px_rgba(11,40,120,0.16)]">
                <img src={QrCode} alt="QR Code" className="size-full" />
                <a
                  download="qr-code.png"
                  href={QrCode}
                  className="absolute -bottom-3 -right-3 aspect-square w-9 rounded-full bg-primary p-1 hover:cursor-pointer"
                >
                  <DownloadIcon className="size-auto" />
                </a>
              </div>
              <div className="mb-3 flex grow flex-col items-center justify-center px-3">
                <span className="mb-2 text-2xl font-bold text-primary-500">Link shortened!</span>
                <span className="text-center text-primary-500">
                  Access the “My URL” page to view statistics on your shortened links
                </span>
              </div>
              <div className="flex h-10 w-full content-between">
                <div className="me-1 flex grow items-center overflow-hidden rounded-lg border border-solid border-primary p-2">
                  <span className="truncate text-primary-500">{shortenedUrl}</span>
                </div>
                <button
                  title="Copy Button"
                  className="w-fit border-[#0B2878] text-[#0B2878] hover:bg-[#bcccf9] border h-10 text-base aspect-square p-2 rounded-lg relative flex min-w-fit items-center justify-center overflow-hidden transition-all duration-100"
                >
                  <CopyIcon className="h-full w-auto" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-[-64px] left-[-30px] h-4/5 w-[150%] -rotate-6 bg-white"></div>
            <button
              onClick={() => setShowQR(false)}
              title="Close Button"
              className="absolute right-3 top-3 z-10 flex aspect-square w-9 items-center justify-center rounded-full bg-white p-1 hover:cursor-pointer md:right-4 md:top-4"
            >
              <CloseIcon className="size-auto" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
