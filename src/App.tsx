import { useState } from 'react'
import MainContent from './components/MainContent'
import ResultModal from './components/ResultModal'
import Header from './components/Header'
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
      <MainContent onShorten={handleShorten} />
      <ResultModal isOpen={isModalOpen} onClose={handleCloseModal} shortUrl={shortUrl} />
    </div>
  )
}
export default App
