import { useState } from 'react'
import Header from './components/Header'
import UrlInput from './components/UrlForm'
import ResultModal from './components/ResultModal'

function App() {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')

  const handleShorten = () => {
    if (!url) return
    setShortenedUrl(`https://tiny.url/${Math.random().toString(36).substring(7)}`)
  }

  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl)
      alert('Copied to clipboard!')
    }
  }

  return (
    <main className="min-h-screen bg-white font-sans relative overflow-x-hidden">
      <Header />
      <div className="flex flex-col items-center justify-center py-12 px-6">
        <div className="w-full max-w-[832px] flex flex-col items-center space-y-2">
          <h1 className="text-[40px] md:text-[60px] font-black text-[#0b2878] text-center">
            Devcamp URL shortener
          </h1>
          <h2 className="text-[20px] md:text-[28px] font-normal text-[#0b2878] text-center mb-6 italic">
            Simplify, Organize, and Share
          </h2>

          <UrlInput url={url} setUrl={setUrl} onShorten={handleShorten} />
          <ResultModal
            shortenedUrl={shortenedUrl}
            onClose={() => setShortenedUrl('')}
            onCopy={handleCopy}
          />
        </div>
      </div>
      <footer className="mt-10 pb-10 text-center opacity-30 italic text-sm text-[#0b2878]">
        2026 DevCamp Frontend Assignment
      </footer>
    </main>
  )
}

export default App
