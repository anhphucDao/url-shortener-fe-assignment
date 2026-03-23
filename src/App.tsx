import './App.css'

function App() {
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
            />
          </div>
          <button className="submit-btn">Shorten</button>
        </div>
      </div>
    </main>
  )
}

export default App
