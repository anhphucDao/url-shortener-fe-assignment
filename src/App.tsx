import { Link2, X, Copy } from 'lucide-react'
import { useState } from 'react'
import Header from './Components/Header.tsx'

function App() {
  const [input_url, setInput_url] = useState('')
  const [result_url] = useState('https://furl.one/myshortenlink')
  const [isProcessing, setIsProcessing] = useState(false)
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center font-sans">
        <p className="font-sans text-[60px] font-bold text-primary-500">Devcamp URL Shortener</p>
        <p className="font-sans text-[28px] text-primary-500 mb-4">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>
        {/* Input phase */}
        <div className="w-208 h-38 shadow-[0px_0px_50px_rgba(0,0,0,0.25)] rounded-[10px] flex items-center justify-center py-2">
          <div className=" w-186">
            <p className="font-semibold text-[20px] text-primary-500">Your long URL</p>
            <div className="flex flex-row py-2">
              <div className="flex flex-row items-center px-1  w-152 border rounded-[10px] border-gray-400 divide-x divide-gray-400">
                <Link2
                  className="w-12 flex-none mr-1 my-2"
                  onClick={async () => {
                    try {
                      setInput_url(await navigator.clipboard.readText())
                    } catch (err) {
                      console.error('Paste errer: ', err)
                    }
                  }}
                />
                <input
                  className="w-1 flex-1 mx-1 my-2 focus:outline-none"
                  value={input_url}
                  onChange={e => setInput_url(e.target.value)}
                  placeholder="Input the URL you want to shorten"
                />
              </div>
              <button
                className="w-24.5 mx-auto rounded-[10px] bg-primary-500 font-bold font-sans text-white hover:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]"
                disabled={isProcessing}
                onClick={() => {
                  setIsProcessing(true)
                }}
              >
                Shorten
              </button>
            </div>
          </div>
        </div>

        {/* Output phase */}
        {isProcessing ? (
          <div className="bg-[rgb(0,0,0,0.3)] z-30 fixed inset-0 flex items-center justify-center">
            <div className="relative w-100 h-117 z-31 bg-white shadow-[0px_0px_50px_rgba(0,0,0,0.25)] rounded-[10px]">
              {/* Phần xanh xanh */}
              <div className="w-100 h-49 bg-primary-500 rounded-t-[10px] [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]" />
              <X
                className="absolute right-3 top-3 bg-neutral-100 rounded-full w-8 h-8 hover:cursor-pointer"
                onClick={() => {
                  setIsProcessing(false)
                }}
              />

              <div className="absolute z-32 w-55 aspect-square rounded-[10px] bg-white shadow-[0px_0px_60px_rgba(0,0,0,0.25)] top-10 justify-self-center">
                <img className="object-contain rounded-[10px]" src="/mock_QR.jpg" alt="QR Code" />
              </div>
              <div className="mt-25 mx-9">
                <div className="text-center text-[24px] text-primary-500 font-bold">
                  Link shortend!
                </div>
                <div className="text-center text-[14px] text-primary-500 font-medium">
                  Access the “My URL” page to view statistics <br /> on your shortened links
                </div>
                <div className="flex flex-row">
                  <input
                    type="text"
                    value={result_url}
                    readOnly
                    className="h-10 w-69 focus:border-none border border-primary-500 rounded-[5px] font-sans p-3"
                  />
                  <Copy
                    className="h-10 w-10 rounded-[5px] bg-primary-500 text-white ml-1 p-2"
                    onClick={() => {
                      try {
                        navigator.clipboard.writeText(result_url)
                        alert('Shorten link is copied !')
                      } catch (err) {
                        console.error('Copy errer: ', err)
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  )
}

export default App
