import Button from './Button'

interface CopyButtonProps {
  isCopied: boolean
  onClick: () => void
}

function CopyButton({ isCopied, onClick }: CopyButtonProps) {
  return (
    <Button
      variant="icon"
      size="sm"
      onClick={onClick}
      title="Copy short URL"
      className="flex h-[50px] w-[50px]"
    >
      {isCopied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="14" height="14" rx="2" ry="2" />
      <path d="M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4" />
      <path d="M13 5h6a2 2 0 0 1 2 2v6" />
    </svg>
  )
}

export default CopyButton
