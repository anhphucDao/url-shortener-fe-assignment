import { useState } from 'react'
import axios from 'axios'
import './shorten.css'

const ShortenForm = () => {
  // 1. Khai báo State để lưu trữ dữ liệu
  const [longUrl, setLongUrl] = useState('') // Lưu nội dung ô nhập
  const [result, setResult] = useState<{ shortUrl: string } | null>(null) // Lưu kết quả trả về từ Backend
  const [loading, setLoading] = useState(false) // Trạng thái chờ khi gọi API

  // 2. Hàm xử lý khi nhấn nút Shorten
  const handleShorten = async () => {
    if (!longUrl) {
      alert('Vui lòng nhập URL!')
      return
    }

    setLoading(true)
    try {
      // Gọi API POST tới Backend Express của bạn
      const response = await axios.post('http://localhost:3001/url/create', {
        longUrl: longUrl,
        shortUrl: Math.random().toString(36).substring(7), // Tự tạo mã ngẫu nhiên cho shortUrl
      })

      // Lưu kết quả vào state result
      setResult(response.data)
      setLongUrl('') // Xóa ô nhập sau khi tạo thành công
    } catch (error) {
      console.error('Lỗi kết nối API:', error)
      alert('Không thể kết nối tới Backend. Hãy chắc chắn Server 3001 đang chạy và đã cài CORS!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-container">
      <h2>Your long URL</h2>
      <div className="form-input-wrapper">
        <input
          type="text"
          className="url-input"
          placeholder="Nhập URL tại đây..."
          value={longUrl}
          onChange={e => setLongUrl(e.target.value)} // Cập nhật state khi gõ chữ
        />
        <button className="shorten-btn" onClick={handleShorten} disabled={loading}>
          {loading ? '...' : 'Shorten'}
        </button>
      </div>

      {/* Hiển thị kết quả sau khi rút gọn thành công */}
      {result && (
        <div className="result-container" style={{ marginTop: '20px', color: '#000000' }}>
          <p>Link rút gọn của bạn:</p>
          <a
            href={`http://localhost:3001/${result.shortUrl}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: '#00ff00' }}
          >
            http://localhost:3001/{result.shortUrl}
          </a>
        </div>
      )}
    </div>
  )
}

export default ShortenForm
