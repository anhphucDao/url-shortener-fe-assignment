import { useState, useCallback } from 'react'
import ShortenForm from './components/ShortenForm'
import ResultModal from './components/ResultModal'
import HeaderLogo from './components/HeaderLogo'

const DEMO_SHORT_URL = 'https://furl.one/myShortenLink'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const handleShortenSuccess = useCallback(() => {
    setModalOpen(true)
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-50">
      <header className="flex items-center justify-between px-6 py-4 md:px-12">
        <HeaderLogo />

        <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 shadow-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] leading-tight text-neutral-400">Personal</p>
            <p className="text-sm font-semibold leading-tight text-primary-500">Username</p>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-32">
        <h1 className="mb-2 text-center text-4xl font-extrabold text-primary-500 md:text-5xl">
          Devcamp URL Shortener
        </h1>
        <p className="mb-10 text-center text-sm text-neutral-500 md:text-base">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>
        <ShortenForm onShortenSuccess={handleShortenSuccess} />
      </main>

      <ResultModal
        isOpen={modalOpen}
        shortenedUrl={DEMO_SHORT_URL}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}

export default App
