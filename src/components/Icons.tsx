import logo from '../assets/devcamp_logo_navy.svg'

interface IconProperties {
  className?: string
}

export const UserIcon = ({ className }: IconProperties) => (
  <svg
    className={className}
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26 0C11.648 0 0 11.648 0 26C0 40.352 11.648 52 26 52C40.352 52 52 40.352 52 26C52 11.648 40.352 0 26 0ZM26 7.8C30.316 7.8 33.8 11.284 33.8 15.6C33.8 19.916 30.316 23.4 26 23.4C21.684 23.4 18.2 19.916 18.2 15.6C18.2 11.284 21.684 7.8 26 7.8ZM26 44.72C19.5 44.72 13.754 41.392 10.4 36.348C10.478 31.174 20.8 28.34 26 28.34C31.174 28.34 41.522 31.174 41.6 36.348C38.246 41.392 32.5 44.72 26 44.72Z"
      fill="#0B2878"
    />
  </svg>
)

export const Logo = ({ className }: IconProperties) => (
  <img src={logo} alt="Logo" className={className} />
)

export const LinkIcon = ({ className }: IconProperties) => (
  <svg
    className={className}
    width="17"
    height="9"
    viewBox="0 0 17 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.58333 4.16667C1.58333 2.74167 2.74167 1.58333 4.16667 1.58333H7.5V0H4.16667C1.86667 0 0 1.86667 0 4.16667C0 6.46667 1.86667 8.33333 4.16667 8.33333H7.5V6.75H4.16667C2.74167 6.75 1.58333 5.59167 1.58333 4.16667ZM5 5H11.6667V3.33333H5V5ZM12.5 0H9.16667V1.58333H12.5C13.925 1.58333 15.0833 2.74167 15.0833 4.16667C15.0833 5.59167 13.925 6.75 12.5 6.75H9.16667V8.33333H12.5C14.8 8.33333 16.6667 6.46667 16.6667 4.16667C16.6667 1.86667 14.8 0 12.5 0Z"
      fill="#0B2878"
      fill-opacity="0.87"
    />
  </svg>
)

export const CloseIcon = ({ className }: IconProperties) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.8333 11.3417L20.6583 10.1667L16 14.825L11.3417 10.1667L10.1667 11.3417L14.825 16L10.1667 20.6584L11.3417 21.8334L16 17.175L20.6583 21.8334L21.8333 20.6584L17.175 16L21.8333 11.3417Z"
      fill="#333333"
    />
  </svg>
)

export const CopyIcon = ({ className }: IconProperties) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 9H12C10.9 9 10 9.9 10 11V25H12V11H24V9ZM27 13H16C14.9 13 14 13.9 14 15V29C14 30.1 14.9 31 16 31H27C28.1 31 29 30.1 29 29V15C29 13.9 28.1 13 27 13ZM27 29H16V15H27V29Z"
      fill="#0b2878"
    />
  </svg>
)

export const DownloadIcon = ({ className }: IconProperties) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#0B2878" />
    <path
      d="M24.6667 21.1667H21.1667V9.5H18.8333V21.1667H15.3333L20 25.8333L24.6667 21.1667ZM10.6667 28.1667V30.5H29.3333V28.1667H10.6667Z"
      fill="white"
    />
  </svg>
)
