export default function Header() {
  return (
    <header className="flex justify-between items-center px-12 py-6 bg-white">
      {/**LOGO */}
      <div>
        <img src="/devcamp_logo_navy 2.png" alt="logo image" className="w-20" />
      </div>

      {/**user account */}
      <div className="flex items-center gap-4 border-[3px] border-[#0B2878] rounded-full pr-6 pl-0">
        <img
          src="/avatar-icon.svg"
          alt="User Avatar"
          className="w-[60px] p-0 -ml-[1px] text-[#0B2878]"
        />
        <div className="flex flex-col justify-center">
          <span className="text-xs text-gray-500 leading-[0.5] -mb-0.5">Personal</span>
          <span className="text-xl font-semibold text-gray-600 -mb-1.5">Username</span>
        </div>
      </div>
    </header>
  )
}
