import { useState } from 'react'
import { IoLinkSharp } from 'react-icons/io5'
import PopUpModal from './popup'
function App() {
  const [url, setUrl] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shortUrl, setShortUrl] = useState('')

  const handleShorten = async () => {
    if (!url) return
    const randomCode = Math.random().toString(36).substring(2, 8)
    const API_URL = 'https://url-shortener-backend-ftwu.onrender.com'

    try {
      const response = await fetch(`${API_URL}/api/urls`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          originalUrl: url,
          shortCode: randomCode,
        }),
      })

      if (response.ok) {
        const generatedLink = `${API_URL}/${randomCode}`
        setShortUrl(generatedLink)
        setIsModalOpen(true)
      } else {
        alert('Có lỗi xảy ra khi tạo link rút gọn!')
      }
    } catch (error) {
      console.error('Lỗi gọi API:', error)
      alert('Không thể kết nối đến máy chủ.')
    }
  }
  return (
    <main className="min-h-screen p-8 bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-primary-500 text-5xl font-bold font-sans leading-relaxed">
        Devcamp URL Shortener
      </h1>
      <p className="text-primary-500 font-sans text-[1.35rem]">
        Simplify, Organize, and Share: URL Management Made Easy
      </p>
      <div
        className="
        bg-white rounded-2xl
        shadow-[0_0_30px_5px_rgba(0,34,101,.2)]
        hover:scale-105 transition-transform duration-300
        cursor-pointer
        flex flex-col
        p-6 max-w-2xl
        mt-8
        gap-3
      "
      >
        <p className="text-primary-500 font-semibold text-xl ">Your long URL</p>
        <div className="flex gap-5">
          <div
            className="
            flex bg-white 
            rounded-lg border
            border-gray-400 h-10 w-120 
            items-center p-2 
            hover:border-primary-500 hover:border-2
            transition-colors duration-200
            "
          >
            <IoLinkSharp className="text-[1.25rem] text-black opacity-30" />
            <div className="w-[1.5px] h-6 bg-black mx-2 rounded-2xl opacity-30"></div>
            <input
              className="outline-none w-full p-2"
              placeholder="Input the URL you want to shorten"
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
          </div>
          <button
            className="
              bg-primary-500 text-white 
              font-bold p-2 rounded-lg w-24 
              hover:scale-110 
              transition-all active:scale-95
              duration-300 hover:bg-blue-600 hover:shadow-xl"
            type="button"
            onClick={handleShorten}
          >
            Shorten
          </button>
        </div>
      </div>
      {isModalOpen && <PopUpModal shortUrl={shortUrl} onClose={() => setIsModalOpen(false)} />}
      <div className="p-3 justify-center items-center">
        <p className="text-primary-500 font-semibold ">
          Le Nguyen Khoi - Khoi.lenguyen3010@hcmut.edu.vn
        </p>
      </div>
    </main>
  )
}
export default App
