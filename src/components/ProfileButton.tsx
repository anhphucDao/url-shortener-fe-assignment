import { memo } from 'react'
import { Button } from './Button'

type ProfileButtonProps = {
  profileOpen: boolean
  onToggleProfile: () => void
  profilePic: string
  profileName: string
  className?: string
}

function ProfileButton({
  profileOpen,
  onToggleProfile,
  profilePic,
  profileName,
  className = '',
}: ProfileButtonProps) {
  return (
    <Button
      type="button"
      variant="outlined"
      shape="pill"
      size="large"
      onClick={onToggleProfile}
      className={`gap-2 overflow-hidden border-brand-navy/40 bg-brand-navy/10 pr-5 text-base font-semibold text-brand-navy transition-transform duration-200 hover:scale-110 ${className}`}
      aria-haspopup="menu"
      aria-expanded={profileOpen}
      aria-label="Open profile menu"
    >
      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
        <img src={profilePic} className="h-full w-full object-cover" alt="Profile avatar" />
      </div>

      <span className="ml-3 tracking-[0.08em]">{profileName}</span>
      <svg
        className={`h-4 w-4 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </Button>
  )
}

export default memo(ProfileButton)
