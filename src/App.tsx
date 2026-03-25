import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import QR from './QR.js'

function App() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [valid, showResult] = useState(false)

  const UrlValid = (value: string) => {
    try {
      const pattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/i
      return pattern.test(value.trim())
    } catch {
      return false
    }
  }

  const handleValid = () => {
    if (!UrlValid(url)) {
      setUrl('')
      toast.error('Please enter an URL!')
      showResult(false)
      return
    } else {
      setShortUrl('https://gdgoc/' + (Math.random() * 10000).toPrecision(4))
      toast.success('Success!')
      showResult(true)
    }
  }

  return (
    <main className="container min-h-screen min-w-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="title text-5xl text-center font-bold text-primary-500 max-w-9/10">
        URL Shortener
      </h1>
      <h2 className="subtitle text-2xl text-center text-gray-600 max-w-9/10">
        Simplify, Organize, and Share: URL Management Made Easy
      </h2>

      <div className="bg-white p-6 w-200 flex flex-col gap-4 rounded-lg shadow-xl border-1 border-gray-300 mt-2 max-w-85/100 min-w-90">
        <p className="text-lg text-gray-700 font-bold ">Your long URL:</p>

        <div className="focus:ring-2 focus:ring-primary-500 flex-1 flex items-center justify-between relative">
          <label
            htmlFor="urlInput"
            className="text-gray-700 absolute ml-1 border-r-1 border-gray-300 flex items-center justify-center p-1"
          >
            🔗
          </label>
          <input
            type="text"
            id="urlInput"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Input the URL you want to shorten"
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary-500 flex-1 pl-10 min-w-50"
            required
          />
          <button
            className="ml-4 bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors cursor-pointer min-w-20
                      hover:bg-primary-300 hover:text-white transition-all ease-in delay-.3"
            onClick={handleValid}
          >
            Shorten
          </button>
        </div>
      </div>

      <QR
        isValid={valid}
        onClose={() => {
          showResult(false)
          setUrl('')
        }}
        shortenUrl={shortUrl}
      />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
  )
}

export default App
