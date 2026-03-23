import { Link2, X, Copy } from 'lucide-react'
import { useState } from 'react'
import Header from './Components/Header.tsx'

function App() {
  const [input_url, setInput_url] = useState('')
  const [result_url, setResultUrl] = useState('')
  const [QR_Code, setQrCode] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)

  // Delay là hàm nhờ AI đưa ra để mô phỏng quả trình gọi API
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
  const handleSubmit = async () => {
    try {
      if (input_url === '') return
      setIsSubmited(true)
      await delay(1000)
      setResultUrl('https://furl.one/myshortenlink')
      setQrCode('mock_QR.jpg')
    } catch (e) {
      console.log('Error: ', e)
    }
  }
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center font-sans">
        <p className="font-sans lg:text-[60px] sm:text-[40px] text-[35px] font-bold text-primary-500">
          Devcamp URL Shortener
        </p>
        <p className="font-sans lg:text-[28px] sm:text-[18px] text-[15px] text-primary-500 mb-4">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>
        {/* Input phase */}
        <div className="w-[50%] min-w-100 lg:h-38 h-26 shadow-[0px_0px_50px_rgba(0,0,0,0.25)] rounded-[10px] flex items-center justify-center">
          <div className=" w-[90%]">
            <p className="font-semibold lg:text-[20px] sm:text-[17px] text-[14px] text-primary-500">
              Your long URL
            </p>
            <div className="flex flex-row py-2 gap-2">
              <div className="flex flex-row items-center px-1 w-[80%] border rounded-[10px] border-gray-400 divide-x divide-gray-400">
                <Link2
                  className="sm:w-12 w-8 flex-none mr-1 my-2 hover:cursor-pointer"
                  onClick={async () => {
                    try {
                      setInput_url(await navigator.clipboard.readText())
                    } catch (err) {
                      console.error('Paste errer: ', err)
                    }
                  }}
                />
                <input
                  className="w-full mx-1 my-2 focus:outline-none"
                  value={input_url}
                  onChange={e => setInput_url(e.target.value)}
                  placeholder="Input the URL you want to shorten"
                />
              </div>
              <button
                className="w-[20%] rounded-[10px] bg-primary-500 font-bold font-sans text-white lg:text-[20px] sm:text-[15px] text-[14px] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.5)] hover:cursor-pointer"
                disabled={isSubmited}
                onClick={() => {
                  handleSubmit()
                }}
              >
                Shorten
              </button>
            </div>
          </div>
        </div>

        {/* Output phase */}
        {isSubmited ? (
          <div className="bg-[rgb(0,0,0,0.3)] z-30 fixed inset-0 flex items-center justify-center">
            {QR_Code !== '' && result_url !== '' ? (
              <div className="relative w-100 h-117 z-31 bg-white shadow-[0px_0px_50px_rgba(0,0,0,0.25)] rounded-[10px]">
                {/* Phần xanh xanh */}
                <div className="w-100 h-49 bg-primary-500 rounded-t-[10px] [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]" />
                <X
                  className="absolute right-3 top-3 bg-neutral-100 rounded-full w-8 h-8 hover:cursor-pointer"
                  onClick={() => {
                    setIsSubmited(false)
                    setInput_url('')
                    setQrCode('')
                  }}
                />

                <div className="absolute z-32 w-55 aspect-square rounded-[10px] bg-white shadow-[0px_0px_60px_rgba(0,0,0,0.25)] top-10 justify-self-center">
                  <img className="object-contain rounded-[10px]" src={QR_Code} alt="QR Code" />
                </div>
                <div className="mt-20 mx-9">
                  <h1 className="text-center text-[24px] text-primary-500 font-bold">
                    Link shortend!
                  </h1>
                  <div className="text-center text-[14px] text-primary-500 font-medium">
                    Access the “My URL” page to view statistics <br /> on your shortened links
                  </div>
                  <div className="flex flex-row mt-5">
                    <input
                      type="text"
                      value={result_url}
                      readOnly
                      className="h-10 w-69 focus:outline-none border border-primary-500 rounded-[5px] font-sans p-3"
                    />
                    <Copy
                      className="h-10 w-10 rounded-[5px] bg-primary-500 text-white ml-1 p-2 hover:cursor-pointer"
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
            ) : (
              <div className="relative w-100 h-117 z-31 bg-white shadow-[0px_0px_50px_rgba(0,0,0,0.25)] rounded-[10px] flex flex-col items-center justify-center ">
                <p className=" font-sans text-primary-500 text-5xl font-bold">Processing...</p>
                <img src="/Loading_icon.svg" />
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  )
}

export default App
