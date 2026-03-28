import { UserAvatarIcon } from './Icons'

const Header = () => {
  return (
    <header className="url-header">
      <img src="/devcamp_logo_navy 1.png" alt="Devcamp" className="url-header__logo" />
      <div className="url-header__signin">
        <div className="url-header__icon">
          <UserAvatarIcon className="url-header__icon-svg" />
        </div>
        <div className="url-header__meta">
          <span className="url-header__text">Username</span>
          <span className="url-header__subtext">Personal</span>
        </div>
      </div>
    </header>
  )
}

export default Header
