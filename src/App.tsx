import { useState } from 'react'
import { Header } from './components/Header'
import { ShortenerCard } from './components/ShortenerCard'
import { ResultModal } from './components/ResultModal' // <-- Import the modal here

export default function App() {
  // State to control the modal visibility and store the generated URL
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shortUrl, setShortUrl] = useState('')

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Header />

      <div className="flex-1 flex flex-col items-center mx-auto leading-[65px] gap-[10px] pt-24 w-full max-w-[1920px] text-primary-500">
        <h1 className="text-[60px] font-bold text-center">Devcamp URL Shortener</h1>
        <p className="text-[28px] font-regular text-center">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>

        <ShortenerCard
          onShorten={url => {
            setShortUrl(url)
            setIsModalOpen(true)
          }}
        />
      </div>

      <ResultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} shortUrl={shortUrl} />
    </main>
  )
}
