import { useState } from 'react'
import ResultModal from './components/ResultModal'
import './index.css'
function App() {
  const [longUrl, setLongUrl] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shortUrl, setShortUrl] = useState('')

  const handleShorten = (e: React.FormEvent) => {
    e.preventDefault()
    if (!longUrl) return

    const fakeShortLink = `https://furl.one/${Math.random().toString(36).substring(2, 8)}`

    setShortUrl(fakeShortLink)
    setIsModalOpen(true) // Mở Modal lên
  }
  return (
    // flex flex-col giúp xếp Header và phần Nội dung dọc theo từ trên xuống dưới
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      {/* HEADER*/}
      {/* sticky top-0 giúp header luôn dính ở trên cùng khi cuộn trang */}
      <header className="bg py-4 px-8 flex justify-between items-center sticky top-0 z-10">
        {/* Bên trái: Logo và Tên */}
        <div className="flex items-center gap-2">
          <img
            src="/7220664b-c516-44de-bac3-c715650aafcb.png" /* Thêm dấu / ở đầu và gọi đúng tên file */
            alt="GDSC HCMUT Logo"
            className="h-20 w-auto"
          />
        </div>
        {/* Bên phải: Thông tin User */}
        <div className="w-38 flex items-center gap-2 border-1 border-primary-500 rounded-full bg-white pl-0 pr-4 py-0 hover:bg-neutral-50 transition-colors shadow-inner overflow-hidden">
          {/* Avatar */}
          <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white">
            <svg className="w-7 h-7" fill="white" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-neutral-600 leading-none">Personal</span>
            <span className="text-sm font-medium text-neutral-600 leading-none mt-1">Username</span>
          </div>
        </div>
      </header>
      {/* --- PHẦN NỘI DUNG CHÍNH--- */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center mb-10 mt-12">
          <h1 className="text-4xl md: text-5xl font-extrabold text-primary-500 mb-4">
            DevCamp URL Shortener
          </h1>
          <p className="text-xl text-primary-500">
            Simplify, Organize, and Share: URL Management Made Easy
          </p>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-2xl w-full max-w-4xl shadow-[0_10px_60px_rgb(0,0,0.1,0.1)] border border-neutral-100">
          <h2 className="text-lg font-bold text-primary-500 mb-4 text-left">Your long URL</h2>
          <form onSubmit={handleShorten} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center border border-neutral-200 rounded-lg focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all bg-white px-4">
              <div className="text-primary-500 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <div className="w-px h-6 bg-neutral-200 mx-3"></div>
              <input
                type="url"
                required
                value={longUrl}
                onChange={e => setLongUrl(e.target.value)}
                placeholder="Input the URL you want to shorten"
                className="flex-1 py-3 outline-none text-neutral-900 bg-transparent text-base placeholder-neutral-400"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-500/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors shrink-0"
            >
              Shorten
            </button>
          </form>
        </div>
      </main>
      <ResultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} shortUrl={shortUrl} />
    </div>
  )
}
export default App
