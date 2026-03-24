import { useState } from 'react'
import QR from './QR.js'

function App() {
  const [url, setUrl] = useState('')
  const [valid, showResult] = useState(false)

  const UrlValid = (value: string) => {
    try {
      new URL(value)
      return true
    } catch {
      return false
    }
  }

  const handleValid = () => {
    console.log(url)
    if (!UrlValid(url)) {
      alert('Lỗi')
      showResult(false)
      return
    } else {
      showResult(true)
    }
  }

  return (
    <main className="min-h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="text-5xl font-bold text-primary-500">URL Shortener</h1>
      <h2 className="text-2xl text-gray-600">
        Simplify, Organize, and Share: URL Management Made Easy
      </h2>

      <div className="bg-white p-6 w-200 flex flex-col gap-4 rounded-lg shadow-xl border-1 border-gray-300">
        <p className="text-lg text-gray-700 font-bold ">Your long URL:</p>

        <div className=" focus:ring-2 focus:ring-primary-500 flex-1 flex items-center justify-between relative">
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
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary-500 flex-1 pl-10"
            required
          />
          <button
            className="ml-4 bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors cursor-pointer"
            onClick={handleValid}
          >
            Shorten
          </button>
        </div>
      </div>

      <QR isValid={valid} />
    </main>
  )
}

export default App
