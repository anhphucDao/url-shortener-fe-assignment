import { useState } from 'react'
import Header from './components/Header'
import QrModal from './components/QrModal'
import UrlForm from './components/UrlForm'
import axios from 'axios'

const QR_CANVAS_ID = 'shortened-url-qr-canvas'

function App() {
  const [url, setUrl] = useState('')
  const [shortened, setShortened] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [copySuccess, setCopySuccess] = useState('')
  const [profileOpen, setProfileOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleShorten() {
    const normalizedUrl = url.trim()
    if (!normalizedUrl) {
      return
    }
    setLoading(true)
    const delay = new Promise(resolve => setTimeout(resolve, 1000))

    try {
      const response = await axios.post('http://localhost:5002/api/shorten', {
        url: normalizedUrl,
      })

      await delay

      const shortUrl = response.data.shortURL
      setShortened(shortUrl)
      setShowPopup(true)
      setCopySuccess('')
    } catch (error) {
      console.error('Failed to shorten url', error)
      await delay

      setShortened(normalizedUrl)
      setShowPopup(true)
      setCopySuccess('')
    } finally {
      setLoading(false)
    }
  }

  function handleCopy() {
    if (shortened) {
      navigator.clipboard.writeText(shortened)
      setCopySuccess('Copied to clipboard!')
      setTimeout(() => setCopySuccess(''), 1200)
    }
  }

  function handleDownloadQr() {
    if (!shortened) {
      return
    }
    const canvas = document.getElementById(QR_CANVAS_ID) as HTMLCanvasElement | null
    if (!canvas) {
      return
    }
    const pngUrl = canvas.toDataURL('image/png')
    const link = document.createElement('a')

    link.href = pngUrl
    link.download = 'shortened-url-qr.png'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className="min-h-screen bg-parchment text-rich-mahogany">
      <Header
        profileOpen={profileOpen}
        onToggleProfile={() => setProfileOpen(prev => !prev)}
        onCloseProfile={() => setProfileOpen(false)}
      />

      <main className="mx-auto flex min-h-[calc(100vh-108px)] w-full max-w-[1920px] items-center justify-center px-4 py-1 sm:px-8 lg:px-12">
        <UrlForm
          url={url}
          loading={loading}
          onUrlChange={setUrl}
          onSubmit={e => {
            e.preventDefault()
            handleShorten()
          }}
        />
      </main>

      {showPopup && (
        <QrModal
          shortened={shortened}
          copySuccess={copySuccess}
          canvasId={QR_CANVAS_ID}
          onClose={() => setShowPopup(false)}
          onCopy={handleCopy}
          onDownload={handleDownloadQr}
        />
      )}
    </div>
  )
}

export default App
