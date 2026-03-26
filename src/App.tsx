import React, { useState } from 'react'
import Input from './pulse/components/Input/Input'
import ResultView from './pulse/components/Result/Result'

function App() {
  const [urlInput, setUrlInput] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [displayUrl, setDisplayUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!urlInput) return

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:4000/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: urlInput }),
      })

      const data = await response.json()

      if (response.ok && data.shortUrl) {
        setShortUrl(data.shortUrl)
        const code = data.shortUrl.split('/c/')[1]
        setDisplayUrl(`short.ly/${code}`)
      } else {
        setError(data.error || 'Đã xảy ra lỗi.')
      }
    } catch (err) {
      console.error(err)
      setError('Không thể kết nối đến Backend.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setShortUrl('')
    setDisplayUrl('')
    setUrlInput('')
    setError('')
  }

  return (
    <div className="min-h-screen bg-[#e0f7f4] flex flex-col items-center justify-center p-6">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-serif text-[#0c6b5e] mb-2 tracking-wide font-extrabold">
          URL SHORTENER
        </h1>
        <p className="text-2xl text-gray-700">Nhanh chóng, tiện lợi, dễ nhìn</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md w-full max-w-2xl text-center border border-red-300">
          {error}
        </div>
      )}

      {!shortUrl ? (
        <form
          onSubmit={handleShorten}
          className="w-full flex flex-col items-center gap-8 max-w-2xl"
        >
          <Input value={urlInput} onChange={e => setUrlInput(e.target.value)} />

          <button
            type="submit"
            disabled={isLoading || !urlInput}
            className="bg-[#0c6b5e] text-[#b2ebe2] font-bold py-4 px-12 rounded-2xl hover:opacity-90 disabled:bg-gray-400 transition-all text-2xl shadow-md min-w-[200px]"
          >
            {isLoading ? 'Đang tạo...' : 'Enter'}
          </button>
        </form>
      ) : (
        <ResultView displayUrl={displayUrl} shortUrl={shortUrl} onReset={handleReset} />
      )}
    </div>
  )
}

export default App
