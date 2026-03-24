export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-neutral-100 bg-shade-white">
      <div className="flex items-center gap-2">
        {/* TikTok-like icon */}
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="8" fill="#0b2878" />
          <path
            d="M22 8h-3.5v10.5a3 3 0 1 1-3-3c.17 0 .34.01.5.04V12a6.5 6.5 0 1 0 6.5 6.5V13.5a8.97 8.97 0 0 0 5 1.5V11.5A5.5 5.5 0 0 1 22 8z"
            fill="white"
          />
        </svg>
        <span className="font-bold text-primary-500 text-lg tracking-tight">FactCheck TikTok</span>
      </div>

      <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-100 rounded-full px-4 py-2 text-sm text-neutral-600">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="8" r="4" stroke="#666" strokeWidth="1.8" />
          <path
            d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
            stroke="#666"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <span>Username</span>
      </div>
    </nav>
  )
}
