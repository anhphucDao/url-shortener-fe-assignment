import { useState } from 'react'
import ResultModal from './components/ResultModal'
import Header from './components/Header'
import ShortenerForm from './components/ShortenerForm'
import './index.css'
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shortUrl, setShortUrl] = useState('')

  const handleShorten = (url: string) => {
    console.log('Processing URL:', url)
    const fakeShortLink = `https://furl.one/${Math.random().toString(36).substring(2, 8)}`
    setShortUrl(fakeShortLink)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="min-h-screen bg-neutral-4 flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-baseline px-2 py-10">
        <div className="text-center mb-10 mt-12">
          <h1 className="text-4xl md: text-5xl font-extrabold text-primary-500 mb-4">
            DevCamp URL Shortener
          </h1>
          <p className="text-xl text-primary-500">
            Simplify, Organize, and Share: URL Management Made Easy
          </p>
        </div>
        <ShortenerForm onSubmit={handleShorten} />
      </main>
      <ResultModal isOpen={isModalOpen} onClose={handleCloseModal} shortUrl={shortUrl} />
    </div>
  )
}
export default App
