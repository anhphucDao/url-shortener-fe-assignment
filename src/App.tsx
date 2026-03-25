import { useState } from 'react'
import './App.css'
import logo from './Logo.jpg'
import paster from './Paster.jpg'
function App() {
  const [Url, setUrl] = useState('')
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setUrl(text)
      console.log('Đã dán nội dung: ', Url)
    } catch (err) {
      console.error('Không thể đọc clipboard: ', err)
    }
  }

  return (
    <main className="container">
      <div className="Logo">
        {' '}
        <img src={logo} alt="Logo" />{' '}
      </div>
      <div className="Main">
        <h1 className="Title">Devcamp URL Shortener</h1>

        <p className="Word">Simplify, Organize, and Share: URL Management Made Easy</p>

        <div className="Box">
          <p className="URL_Text">Your long URL</p>

          <div className="Box_URL">
            <button className="Paste_Button" onClick={handlePaste}>
              <img src={paster} alt="Paste" style={{ width: '24px', height: '24px' }} />
            </button>
            <input
              type="text"
              placeholder="Input the URL you want to shorten"
              className="Input_URL"
            />
            <button className="Button">Shorten</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
