import { useState, memo } from 'react'
import devcampLogo from '../assets/devcamp_logo_navy 1.svg'
import githubIcon from '../assets/github_icon.svg'
import profilePic from '../assets/profile_pic.jpg'
import { ProfileButton } from './Button'

function Header() {
  const [profileOpen, setProfileOpen] = useState(false)
  const onToggleProfile = () => setProfileOpen(prev => !prev)
  const onCloseProfile = () => setProfileOpen(false)

  const renderProfile = () => {
    if (!profileOpen) {
      return null
    }
    return (
      <div className="absolute right-0 top-[calc(100%+10px)] z-30 w-[220px] rounded-2xl border border-brand-navy/20 bg-white p-2 shadow-xl">
        <a
          href="https://github.com/dhp-exe"
          target="_blank"
          rel="noopener"
          className="block rounded-xl px-4 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy/10"
          onClick={onCloseProfile}
        >
          <div className="flex items-center gap-2">
            <img src={githubIcon} alt="GitHub" className="h-4 w-4" />
            <span>Github</span>
          </div>
        </a>

        <button
          type="button"
          className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-semibold text-brand-navy transition hover:bg-brand-navy/10"
        >
          <span aria-hidden="true" className="text-base text-brand-navy">
            ⏻
          </span>
          <span>Logout</span>
        </button>
      </div>
    )
  }

  return (
    <header className="border-b border-brand-navy/20 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[108px] w-full max-w-[1920px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-2 text-xl font-black tracking-[0.12em] text-brand-navy sm:text-2xl">
          <a href="https://fessior.com/" target="_blank" rel="noopener">
            <img
              src={devcampLogo}
              className="cursor-pointer mr-8 inline-block h-full w-auto transition hover:scale-105"
              alt="Devcamp logo"
            />
          </a>
          <span className="truncate whitespace-nowrap text-sm font-black tracking-[0.1em] text-brand-navy sm:text-xl lg:text-2xl lg:tracking-[0.12em]">
            Fessior DevCamp 2026
          </span>
        </div>

        <div className="relative flex w-full max-w-[240px] justify-end">
          <ProfileButton
            profileOpen={profileOpen}
            onToggleProfile={onToggleProfile}
            profilePic={profilePic}
            profileName="dhp"
          />

          {renderProfile()}
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
