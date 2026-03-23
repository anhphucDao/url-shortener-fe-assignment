import { useState } from 'react'
import logo from './logo.png'
import qr from './qr.png'

function App() {
  const [url, setUrl] = useState('')
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shortLink = 'https://furl.one/myshortlink'

  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <main className="min-h-screen bg-neutral-50 font-sans">
      <div className="flex justify-between items-center px-8 py-4">
        <img src={logo} className="h-14 w-14 object-cover rounded-full" />

        <div className="flex items-center gap-2 border border-primary-500 rounded-full px-3 py-1">
          <div className="w-6 h-6 bg-primary-500 rounded-full"></div>
          <span className="text-sm text-primary-500">Username</span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-24">
        <h1 className="text-4xl font-bold text-primary-500">Devcamp URL Shortener</h1>

        <p className="text-neutral-500 mt-2">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>

        <div className="mt-8 bg-white p-4 rounded-lg flex items-center gap-3 w-[520px] shadow">
          <input
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Input the URL you want to shorten"
            className="flex-1 outline-none"
          />

          <button
            onClick={() => setOpen(true)}
            className="bg-primary-500 text-white px-4 py-2 rounded-md hover:opacity-90"
          >
            Shorten
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white rounded-xl w-[320px] p-6 text-center relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-neutral-500"
            >
              x
            </button>

            <img src={qr} className="w-40 h-40 mx-auto" />

            <h2 className="mt-4 font-semibold text-primary-500">Link shortened!</h2>

            <p className="text-sm text-neutral-500 mt-1">
              Access the "My URL" page to view statistics on your shortened links
            </p>

            <div className="mt-4 flex">
              <input
                value={shortLink}
                readOnly
                className="flex-1 border border-neutral-200 px-2 py-1 rounded-l outline-none"
              />
              <button
                onClick={handleCopy}
                className="bg-primary-500 text-white px-3 rounded-r transition"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
