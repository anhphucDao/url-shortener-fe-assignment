function Header() {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
      {/* Logo bên trái */}
      <img src="/devcamp_logo_navy 1.png" className="w-24 h-auto" />

      {/* Username bên phải */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
        <img src="/Vector.png" className="w-8 h-8" />
        <div>
          <p className="text-xs text-gray-400">Personal</p>
          <p className="text-sm font-medium text-gray-700">Username</p>
        </div>
      </div>
    </div>
  )
}

export default Header
