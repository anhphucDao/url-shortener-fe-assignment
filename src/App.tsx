import { useState } from 'react'
import { Header, UrlShortenerForm, ShortenPopup } from './components'

interface ShortenedData {
  shortUrl: string
  qrCode: string
}

function App() {
  const [showPopup, setShowPopup] = useState(false)
  const [shortenedData, setShortenedData] = useState<ShortenedData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleShorten = (data: ShortenedData) => {
    setShortenedData(data)
    setShowPopup(true)
    setError(null)
  }

  const handleError = (errorMessage: string) => {
    setError(errorMessage)
    // Show error for 3 seconds
    setTimeout(() => setError(null), 3000)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-primary-500 mb-[10px]">Devcamp URL Shortener</h1>

        <p className="text-lg text-primary-500 mb-[10px]">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <UrlShortenerForm onShorten={handleShorten} onError={handleError} />
      </main>

      <ShortenPopup
        isOpen={showPopup}
        onClose={handleClosePopup}
        shortenedUrl={shortenedData?.shortUrl}
        qrCode={shortenedData?.qrCode}
      />
    </>
  )
}

export default App
