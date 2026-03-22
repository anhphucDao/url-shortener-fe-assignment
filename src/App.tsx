import { useState, useRef } from 'react'
import Header from './components/Header'
import QrModal from './components/QrModal'
import UrlForm from './components/UrlForm'

const COPY_FEEDBACK_DURATION_MS = 2000
const TOAST_ERROR_DURATION_MS = 3000

function App() {
  const [url, setUrl] = useState('')
  const [shortened, setShortened] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [copySuccess, setCopySuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [toastError, setToastError] = useState('')

  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  async function handleShorten() {
    const normalizedUrl = url.trim()
    if (!normalizedUrl) {
      return
    }
    setShortened('')
    setLoading(true)
    setToastError('')

    try {
      throw new Error('Backend not connected yet')
      // setShortened(normalizedUrl)
      // setShowPopup(true)
      // setCopySuccess('')
    } catch (error) {
      console.error('Failed to shorten URL:', error)
      setToastError('Cannot connect to the server. Please try again.')
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
      toastTimerRef.current = setTimeout(() => setToastError(''), TOAST_ERROR_DURATION_MS)

      setShowPopup(true) //NOTE: just for demo of QR UI, will be removed when backend is ready
    } finally {
      setLoading(false)
    }
  }

  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleCopy() {
    if (shortened) {
      navigator.clipboard.writeText(shortened)
      setCopySuccess('Copied to clipboard!')
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
      copyTimerRef.current = setTimeout(() => setCopySuccess(''), COPY_FEEDBACK_DURATION_MS)
    }
  }
  const qrCanvasRef = useRef<HTMLCanvasElement>(null)

  function handleDownloadQr() {
    if (!shortened) return

    const canvas = qrCanvasRef.current

    if (!canvas) return

    const pngUrl = canvas.toDataURL('image/png')
    const link = document.createElement('a')

    link.href = pngUrl
    link.download = 'shortened-url-qr.png'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className="min-h-screen bg-white text-brand-navy">
      <Header />

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
          canvasRef={qrCanvasRef}
          onClose={() => setShowPopup(false)}
          onCopy={handleCopy}
          onDownload={handleDownloadQr}
        />
      )}

      {toastError && (
        <div className="fixed bottom-8 right-8 z-50 flex max-w-sm items-center gap-3 rounded-xl border border-red-200 bg-red-100 px-5 py-4 shadow-2xl transition-all">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
            !
          </span>
          <p className="text-sm font-semibold text-red-800">{toastError}</p>
        </div>
      )}
    </div>
  )
}

export default App
