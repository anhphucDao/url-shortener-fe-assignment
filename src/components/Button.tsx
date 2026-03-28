import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'

type CircleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
}

type SquareButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
}

type ProfileButtonProps = {
  profileOpen: boolean
  onToggleProfile: () => void
  profilePic: string
  profileName: string
}

function CircleButton({ children, className = '', type = 'button', ...props }: CircleButtonProps) {
  return (
    <button
      type={type}
      className={`flex cursor-pointer items-center justify-center rounded-full transition hover:scale-110 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function SquareButton({ children, className = '', type = 'button', ...props }: SquareButtonProps) {
  return (
    <button
      type={type}
      className={`flex cursor-pointer items-center justify-center rounded-lg transition hover:scale-110 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function ProfileButton({
  profileOpen,
  onToggleProfile,
  profilePic,
  profileName,
}: ProfileButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggleProfile}
      className="flex cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-brand-navy/40 bg-brand-navy/10 pr-5 text-base font-semibold text-brand-navy transition-transform duration-200 hover:scale-110"
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
    </button>
  )
}

const MemoProfileButton = memo(ProfileButton)

export { CircleButton, SquareButton, MemoProfileButton as ProfileButton }
