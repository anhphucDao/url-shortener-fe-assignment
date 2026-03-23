import promLogo from '../assets/devcamp_logo_navy 1.svg'
import { UserIcon } from '../assets/icons/UserIcon'
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full h-27 px-6 flex justify-between items-center">
      <a href="https://fessior.com/" className="">
        <img src={promLogo} alt="Prometheus logo" />
      </a>
      <a
        href="#"
        className="flex items-center gap-2 border border-primary-500 rounded-full pr-4 overflow-hidden"
      >
        <UserIcon className="text-primary-500 scale-125" />
        <div className="flex flex-col leading-tight">
          <p className="text-[11px] text-neutral-500">Personal</p>
          <p className="text-md font-semibold text-neutral-500">Username</p>
        </div>
      </a>
    </header>
  )
}
