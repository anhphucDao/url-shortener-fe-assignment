import promLogo from '../assets/devcamp_logo_navy 1.svg'
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
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary-500 block scale-125"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM12.0938 6.75C12.7613 6.75 13.4138 6.94794 13.9688 7.31879C14.5238 7.68964 14.9564 8.21674 15.2118 8.83344C15.4673 9.45014 15.5341 10.1287 15.4039 10.7834C15.2737 11.4381 14.9522 12.0395 14.4802 12.5115C14.0082 12.9835 13.4069 13.3049 12.7522 13.4352C12.0975 13.5654 11.4189 13.4985 10.8022 13.2431C10.1855 12.9876 9.65839 12.5551 9.28754 12C8.91669 11.445 8.71875 10.7925 8.71875 10.125C8.71875 9.22989 9.07433 8.37145 9.70726 7.73851C10.3402 7.10558 11.1986 6.75 12.0938 6.75ZM12 20.25C10.8621 20.2505 9.73645 20.0149 8.69419 19.5583C7.65194 19.1016 6.71572 18.4337 5.94469 17.5969C6.35906 15.4509 10.0809 15 12 15C13.9191 15 17.6409 15.4509 18.0553 17.5964C17.2844 18.4334 16.3482 19.1014 15.3059 19.5582C14.2636 20.0149 13.138 20.2505 12 20.25Z"
            fill="currentColor"
          />
        </svg>
        <div className="flex flex-col leading-tight">
          <p className="text-[11px] text-neutral-500">Personal</p>
          <p className="text-md font-semibold text-neutral-500">Username</p>
        </div>
      </a>
    </header>
  )
}
