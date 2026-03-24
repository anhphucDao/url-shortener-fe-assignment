import Username from './Username'

function Navbar() {
  return (
    <nav className="flex items-center justify-between h-27 bg-white">
      <div>
        <img
          src="/logo.png"
          alt="Logo"
          className="h-18.5 w-24 ml-10 mt-4.25 mb-4.25 inline-block mr-2"
        />
      </div>
      <div>
        <Username />
      </div>
    </nav>
  )
}

export default Navbar
