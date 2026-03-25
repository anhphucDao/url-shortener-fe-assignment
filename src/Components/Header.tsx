import devcampLogo from '../devcampLogo.png'

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-6 md:px-12">
      <img src={devcampLogo} alt="DevCamp Logo" className="w-auto h-[74px] object-contain" />
      <div className="flex items-center gap-3 bg-[#f2f4f6] border-[3px] border-[#0b2878] rounded-full pl-1 pr-6 py-1">
        <div className="w-11 h-11 rounded-full bg-[#0b2878] flex items-end justify-center overflow-hidden">
          <svg className="w-9 h-9 text-white mb-[-2px]" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-left">
          <p className="text-[10px] font-bold text-[#0b2878] opacity-50 uppercase leading-none">
            Personal
          </p>
          <p className="text-[15px] font-[1000] text-[#0b2878] leading-tight">Đàng Tiến Thành</p>
        </div>
      </div>
    </header>
  )
}

export default Header
