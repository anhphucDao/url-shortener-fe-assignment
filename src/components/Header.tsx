import devcampLogo from '../assets/devcamp_logo_navy 1.svg'
import githubIcon from '../assets/github_icon.svg'
import profilePic from '../assets/profile_pic.jpg'

type HeaderProps = {
  profileOpen: boolean
  onToggleProfile: () => void
  onCloseProfile: () => void
}

function Header({ profileOpen, onToggleProfile, onCloseProfile }: HeaderProps) {
  return (
    <header className="border-b border-rich-mahogany/20 bg-parchment/95 backdrop-blur-md">
      <div className="mx-auto flex h-[108px] w-full max-w-[1920px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <div className="text-1xl font-black tracking-[0.12em] text-rich-mahogany sm:text-2xl">
          <a href="https://fessior.com/" target="_blank" rel="noopener">
            <img
              src={devcampLogo}
              className="mr-8 inline-block h-full w-auto cursor-pointer transition hover:scale-120"
              alt="Devcamp logo"
            />
          </a>
          Fessior DevCamp 2026
        </div>

        <div className="relative flex w-full max-w-[240px] justify-end">
          <button
            type="button"
            onClick={onToggleProfile}
            className="flex cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-rich-mahogany/40 bg-rich-mahogany/10 pr-5 text-base font-semibold text-rich-mahogany transition-transform duration-200 hover:scale-110"
            aria-haspopup="menu"
            aria-expanded={profileOpen}
            aria-label="Open profile menu"
          >
            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
              <img src={profilePic} className="h-full w-full object-cover" alt="Profile avatar" />
            </div>

            <span className="ml-3 tracking-[0.08em]">dhp</span>
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-[calc(100%+10px)] z-30 w-[220px] rounded-2xl border border-rich-mahogany/20 bg-parchment p-2 shadow-xl">
              <a
                href="https://github.com/dhp-exe"
                target="_blank"
                rel="noopener"
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-rich-mahogany transition hover:bg-rich-mahogany/10"
                onClick={onCloseProfile}
              >
                <div className="flex items-center gap-2">
                  <img src={githubIcon} alt="GitHub" className="h-4 w-4" />
                  <span>Github</span>
                </div>
              </a>

              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-semibold text-rich-mahogany transition hover:bg-rich-mahogany/10"
              >
                <span aria-hidden="true" className="text-base text-rich-mahogany/80">
                  ⎋
                </span>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
