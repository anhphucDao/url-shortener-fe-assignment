import { useState } from 'react'
import { Header, UrlShortenerForm, ShortenPopup } from './components'

function App() {
  const [showPopup, setShowPopup] = useState(false)

  const handleShorten = () => {
    console.log('Shorten button clicked!')
    setShowPopup(true)
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

        <UrlShortenerForm onShorten={handleShorten} />
      </main>

      <ShortenPopup isOpen={showPopup} onClose={handleClosePopup} />
    </>
  )
}

export default App
