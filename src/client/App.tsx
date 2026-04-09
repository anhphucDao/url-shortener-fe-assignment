import { Header, ShortenForm, QRPage } from './components/sections'
import { useState } from 'react'
import type { ShortLink } from './types'

function App() {
  const [activeLink, setActiveLink] = useState<ShortLink | null>(null)

  return (
    <div>
      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#f5f5f7]">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0B2A7B] text-center">
          Devcamp URL Shortener
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-[#1E3A8A] text-center font-medium">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>

        <ShortenForm onCreated={setActiveLink} />
      </main>

      {activeLink && (
        <QRPage
          shortUrl={activeLink.shortUrl}
          originalUrl={activeLink.originalUrl}
          onClose={() => setActiveLink(null)}
        />
      )}
    </div>
  )
}

export default App
