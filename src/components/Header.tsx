interface HeaderProps {
  logo?: string
  profileIcon?: string
  username?: string
  accountType?: string
}

export function Header({
  logo = '/assets/devcamp_logo_navy 1.svg',
  profileIcon = '/assets/ProfileVector.svg',
  username = 'Username',
  accountType = 'Personal',
}: HeaderProps) {
  return (
    <header className="w-full bg-white px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-primary-500">
        <img src={logo} alt="Devcamp Logo" className="h-8" />
      </div>

      <div className="flex items-center gap-2 w-[200px] border-2 border-[#0B2878] rounded-full bg-gray-100">
        <button className="text-primary-500 font-semibold p-2">
          <img src={profileIcon} alt="Profile" className="w-8 h-8" />
        </button>

        <div className="flex flex-col">
          <span className="text-sm text-gray-500 leading-none">{accountType}</span>
          <span className="text-xl font-semibold text-gray-500 leading-tight">{username}</span>
        </div>
      </div>
    </header>
  )
}
