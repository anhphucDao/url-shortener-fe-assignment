import { useState } from 'react'
import Header from './components/Header'
import ShortenForm from './components/ShortenForm'
import Modal from './components/Modal'

function App() {
  const [url, setUrl] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [shortUrl, setShortUrl] = useState<string>('')
  // hàm khi nhấn nút Shorten
  const handleShorten = () => {
    if (!url) return
    setShortUrl('https://furl.one/myshortenlink') // gán cứng cho shortUrl
    setIsModalOpen(true) // cập nhật biến isModalOpen thành true
  }

  return (
    <div className="min-h-screen bg-white">
      <Header /> {/* gọi component header */}
      {/* Nội dung giới thiệu */}
      <div className="flex flex-col items-center justify-center mt-32 px-4">
        <h1 className="text-5xl font-bold text-[#0B2878] mb-3">Devcamp URL Shortener</h1>
        <p className="text-[#0B2878] mb-10">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>

        {/* gọi component ShortenForm yêu cầu ShortenFormProps */}
        <ShortenForm url={url} onUrlChange={setUrl} onShorten={handleShorten} />
      </div>
      {/* gọi component Modal yêu cầu ModalProps */}
      {isModalOpen && <Modal shortUrl={shortUrl} onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default App
