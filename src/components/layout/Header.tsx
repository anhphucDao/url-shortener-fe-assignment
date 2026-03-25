export const Header = () => {
  return (
    <header
      id="header"
      className="fixed top-0 z-50 flex w-full items-center justify-between bg-white p-5 shadow-[0px_6px_15px_rgba(64,79,104,0.05)] md:py-3.5 lg:px-7 lg:py-5"
    >
      {/* Logo Section */}
      <a
        href="https://fessior.com/"
        className="flex items-center text-xl font-bold text-primary-500 md:text-2xl lg:text-3xl shrink-0"
      >
        <img src="/icons/fessior_navy.svg" alt="Fessior Logo" className="h-9 w-auto md:h-10 me-2" />
        <h4 className="hidden sm:block">Fessior Tools</h4>
      </a>

      {/* Navigation */}
      <nav className="hidden grow items-center justify-end md:flex">
        <div className="flex gap-6 lg:gap-8 px-5">
          <a
            href="https://fessior.com/"
            className="text-lg hover:underline text-neutral-600 transition-all"
          >
            Home
          </a>
          <a
            href="https://fessior.com/tools/url-shortener/generate"
            className="text-lg font-bold text-primary-500 border-b-2 border-primary-500 pb-1"
          >
            URL Shortener
          </a>
          <a
            href="https://fessior.com/tools/qr-code/generate"
            className="text-lg hover:underline text-neutral-600 transition-all"
          >
            QR Generator
          </a>
          <a
            href="https://fessior.com/about-us"
            className="text-lg hover:underline text-neutral-600 transition-all"
          >
            Resources
          </a>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 rounded-full border border-primary-500 p-1 pr-4 ml-4 hover:bg-neutral-50 transition-colors cursor-pointer min-w-[160px]">
          {/* Avatar */}
          <div className="rounded-full p-1.5">
            <img src="/icons/header/user_profile.svg" alt="profile" className="w-6 h-6" />
          </div>

          <div className="flex flex-col grow truncate">
            <p className="text-[10px] text-neutral-500 leading-tight uppercase">Welcome</p>
            <p className="font-bold text-neutral-900 text-sm truncate">Username</p>
          </div>

          <img
            src="/icons/header/inactive/collapse_grey.svg"
            alt="arrow"
            className="w-3 h-3 ml-auto"
          />
        </div>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-primary-500 text-2xl">☰</div>
    </header>
  )
}
