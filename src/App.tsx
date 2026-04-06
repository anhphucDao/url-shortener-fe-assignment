import { useState, useEffect } from 'react' 
import './App.css'
interface UrlHistory {
  id: number;
  longUrl: string;
  shortUrl: string;
}

function App() {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const [history, setHistory] = useState<UrlHistory[]>([]);

  const fetchHistory = async () => {
    try {
      const response = await fetch('http://localhost:3000/urls')
      const data = await response.json()
      setHistory(data) 
    } catch (error) {
      console.error('Error when access history:', error)
    }
  }

  useEffect(() => {
    let ignore = false; 

    async function startFetching() {
      try {
        const response = await fetch('http://localhost:3000/urls');
        const json = await response.json();
        
        if (!ignore) {
          setHistory(json);
        }
      } catch (err) {
        console.error("Error when access history:", err);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, []); 

  const handleShorten = async () => {
    if (longUrl === '') {
      alert('Please paste your link!')
      return
    }

    try {
      const response = await fetch('http://localhost:3000/urls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          longUrl: longUrl,
          shortUrl: Math.random().toString(36).substring(2, 8)
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setShortUrl(`http://localhost:3000/${data.shortUrl}`)
        setIsModalOpen(true)
        
        fetchHistory() 
      } else {
        const errorData = await response.json()
        alert(errorData.message || 'Error!')
      }
    } catch (error) {
      console.error("Detailed error:", error);
      alert("Cannot connect to BackEnd!");
    }
  }

  const handleCopy = () => {
    if (!shortUrl) return
    navigator.clipboard.writeText(shortUrl)
    alert('Copied!')
  }

  return (
    <main className="app-container">
      <nav className="top-nav">
        <div className="nav-logo">
          <img src="logo.png" className="logo" alt="Logo" />
        </div>
        <div className="user-card">
          <div className="user-icon">👤</div>
          <div className="user-details">
            <span className="user-status">Personal</span>
            <span className="user-name">Username</span>
          </div>
        </div>
      </nav>

      <div className="shortener-container">
        <header className="header">
          <h1 className="main-title">Devcamp URL Shortener</h1>
          <p className="sub-title">Simplify, Organize, and Share: URL Management Made Easy</p>
        </header>
      </div>

      <div className="shortener-box">
        <label className="input-label">Your long URL</label>
        <div className="input-group">
          <div className="input-field-wrapper">
            <span className="link-symbol">🔗</span>
            <input
              type="text"
              className="url-input"
              placeholder="Input the URL you want to shorten"
              value={longUrl}
              onChange={e => setLongUrl(e.target.value)}
            />
          </div>
          <button className="submit-btn" onClick={handleShorten}>
            Shorten
          </button>
        </div>
      </div>

      <div className="history-section">
        <h2 className="history-title">Recent Links</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Original Link</th>
              <th>Short Link</th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? (
              history.map((item) => (
                <tr key={item.id}>
                  <td className="truncate">{item.longUrl}</td>
                  <td>
                    <a href={`http://localhost:3000/${item.shortUrl}`} target="_blank" rel="noreferrer">
                      {item.shortUrl}
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>No links have been created yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2 className="modal-title">Link shortened!</h2>
            <div className="result-container">
              <input type="text" className="result-input" value={shortUrl} readOnly />
              <button className="copy-btn" onClick={handleCopy}>Copy</button>
            </div>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App