import './App.css'
import logoImg from './assets/devcamp_logo_navy.svg'
import userIcon from './assets/UserProfile.svg'
import Wrapper from './assets/Path.svg'

function App() {
  return (
    <div className="root">
      <header className="header">
        <div className="logo-container">
          <img src={logoImg} alt="Logo" className="logo-image" />
        </div>

        <div className="user-profile">
          <div className="user-avatar">
            <img src={userIcon} alt="User Avatar" />
          </div>
          <div className="user-info">
            <span className="user-label">Personal</span>
            <span className="user-name">Username</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <h1 className="title">Devcamp URL Shortener</h1>
        <p className="subtitle">Simplify, Organize, and Share: URL Management Made Easy</p>

        <div className="shorten-card">
          <label className="input-label">Your long URL</label>
          <div className="input-group">
            <div className="input-wrapper">
              <img src={Wrapper} alt="icon background" className="icon-link" />

              <input
                type="text"
                placeholder="Input the URL you want to shortenq"
                className="url-input"
              />
            </div>

            <button className="btn-shorten">Shorten</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
