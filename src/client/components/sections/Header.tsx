import { useState } from 'react'
import { Button } from '../common'
import { DropdownIcon, LogoutIcon } from '../icons'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [showDropdown, setShowDropdown] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setShowDropdown(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setShowDropdown(false)
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const profileAvatarSrc = 'https://avatars.githubusercontent.com/u/9919?v=4'
  const profileName = 'Vinh Luong'

  return (
    <header className="bg-white py-4 px-6 md:px-12 flex justify-between items-center relative z-50 transition-all">
      <span className="text-2xl font-black text-[#0B2A7B] tracking-tight ml-2">
        Fessior DevCamp 2026
      </span>

      <div className="relative">
        {!isLoggedIn ? (
          <Button onClick={handleLogin} className="rounded-full shadow-lg shadow-blue-100">
            Log in
          </Button>
        ) : (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-3 pr-4 py-1.5 pl-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition shadow-sm"
            >
              <img
                src={profileAvatarSrc}
                alt="Profile"
                className="h-9 w-9 rounded-full object-cover border border-gray-100"
              />
              <span className="font-bold text-[#0B2A7B]">{profileName}</span>
              <DropdownIcon isOpen={showDropdown} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
                <button
                  className="w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-50 text-left transition"
                  onClick={handleLogout}
                >
                  <LogoutIcon />
                  <span className="font-bold text-[#0B2A7B] text-sm">Logout</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
