export const Header = () => {
  return (
    <header className="w-full max-w-[1920px] mx-auto h-[108px] flex items-center justify-between px-6 md:px-12 lg:px-20">
      {/* LEFT: LOGO */}
      <img
        src="/devcamp_logo.svg"
        alt="Devcamp Prometheus Logo"
        className="h-[74px] w-auto cursor-pointer"
      />

      {/* RIGHT: USER PROFILE BADGE */}
      <div className="flex items-center border border-color-primary-500 rounded-full cursor-pointer hover:shadow-md transition-shadow bg-white w-[199px] h-[52px]">
        <img src="/avatar.svg" alt="User avatar" className="h-[52px] w-auto" />
        <div className="flex flex-col m-auto px-4 text-color-secondary-400 w-full">
          <span className="text-[12px] font-regular leading-tight">Personal</span>
          <span className="text-[20px] font-medium leading-tight">Username</span>
        </div>
      </div>
    </header>
  )
}
