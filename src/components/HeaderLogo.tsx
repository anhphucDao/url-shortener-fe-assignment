import logo from '../assets/devcamp_logo_navy.svg'

const HeaderLogo = () => {
  return (
    <a href="/" className="inline-block transition-transform hover:scale-105">
      <img
        src={logo}
        alt="Fessior Devcamp Prometheus Logo"
        className="h-14 w-auto object-contain"
      />
    </a>
  )
}

export default HeaderLogo
