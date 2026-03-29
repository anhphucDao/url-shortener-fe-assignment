import { User } from 'lucide-react' // Import user icon from lib lucide-react
import './Header.css' // Import CSS for styling the header
const Header = () => {
  return (
    <header className="header-container">
      <img className="logo" src="/favicon.svg" alt="Logo" />

      <div className="profile">
        <div className="profile-box">
          <div className="avatar-circle">
            <User size={18} color="#fff" strokeWidth={2.5} />
          </div>
          <div className="profile-info">
            <span className="label-personal">Personal</span>
            <strong className="username-text">Username</strong>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
