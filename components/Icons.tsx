import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export const CloseIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="shorten-modal__close-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const DownloadIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="shorten-modal__download-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 5V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11L12 14.5L15.5 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export const CheckIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="shorten-modal__copy-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const CopyIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="shorten-modal__copy-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 7V5C8 3.89543 8.89543 3 10 3H18C19.1046 3 20 3.89543 20 5V13C20 14.1046 19.1046 15 18 15H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="4" y="7" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export const LinkIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 17 17"
      className="frame-5522__input-icon-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.25 8.5C3.25 7.075 4.40833 5.91667 5.83333 5.91667H7.5V4.33333H5.83333C3.53333 4.33333 1.66667 6.2 1.66667 8.5C1.66667 10.8 3.53333 12.6667 5.83333 12.6667H7.5V11.0833H5.83333C4.40833 11.0833 3.25 9.925 3.25 8.5ZM6.33333 9.33333H9.66667V7.66667H6.33333V9.33333ZM11.1667 4.33333H9.5V5.91667H11.1667C12.5917 5.91667 13.75 7.075 13.75 8.5C13.75 9.925 12.5917 11.0833 11.1667 11.0833H9.5V12.6667H11.1667C13.4667 12.6667 15.3333 10.8 15.3333 8.5C15.3333 6.2 13.4667 4.33333 11.1667 4.33333Z"
        fill="currentColor"
        fillOpacity="0.87"
      />
    </svg>
  )
}

export const UserAvatarIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      className="url-header__icon-svg"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26 0C11.648 0 0 11.648 0 26C0 40.352 11.648 52 26 52C40.352 52 52 40.352 52 26C52 11.648 40.352 0 26 0ZM26 7.8C30.32 7.8 33.8 11.284 33.8 15.6C33.8 19.916 30.32 23.4 26 23.4C21.68 23.4 18.2 19.916 18.2 15.6C18.2 11.284 21.68 7.8 26 7.8ZM26 44.72C19.5 44.72 13.752 41.392 10.4 36.348C10.48 31.174 20.8 28.34 26 28.34C31.168 28.34 41.52 31.174 41.6 36.348C38.248 41.392 32.5 44.72 26 44.72Z"
        fill="currentColor"
      />
    </svg>
  )
}