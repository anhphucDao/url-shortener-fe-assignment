import React, { useState } from 'react'
import Input from './pulse/components/Input/Input'
import ResultModal from './pulse/components/Result/Result'

function App() {
  const [urlInput, setUrlInput] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!urlInput) return

    setIsLoading(true)
    try {
      const response = await fetch('https://url-6iqw.onrender.com/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: urlInput }),
      })

      const data = await response.json()
      if (data.shortUrl) {
        setShortUrl(data.shortUrl)
      } else {
        alert('Lỗi từ server')
      }
    } catch (err) {
      console.error(err)
      alert('Không kết nối được Backend!')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCloseModal = () => {
    setShortUrl('')
    setUrlInput('')
  }

  return (
    <div className="min-h-screen bg-[#f0faf8] flex flex-col items-center justify-center p-6 relative">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-serif text-[#40c4aa] mb-2 font-extrabold tracking-wide">
          URL SHORTENER
        </h1>
        <p className="text-2xl text-gray-700">Nhanh chóng, tiện lợi, dễ nhìn</p>
      </div>

      <form onSubmit={handleShorten} className="w-full max-w-3xl flex flex-col items-center gap-8">
        <Input value={urlInput} onChange={e => setUrlInput(e.target.value)} />

        <button
          type="submit"
          disabled={isLoading || !urlInput}
          className="bg-[#63d9c6] hover:bg-[#52c4b3] focus:ring-4 focus:ring-[#a8f2e7] text-white font-bold py-3 px-12 rounded-sm transition-all duration-200 text-2xl shadow-md min-w-[200px] disabled:bg-gray-400 disabled:cursor-not-allowed outline-none"
        >
          {isLoading ? 'Đang tạo...' : 'Enter'}
        </button>
      </form>

      {shortUrl && <ResultModal shortUrl={shortUrl} onClose={handleCloseModal} />}
    </div>
  )
}

export default App
