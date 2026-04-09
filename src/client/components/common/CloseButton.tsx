import Button from './Button'

interface CloseButtonProps {
  onClick: () => void
}

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={onClick}
      className="absolute top-3 right-3 z-20 rounded-full text-gray-700 hover:bg-white"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </Button>
  )
}

export default CloseButton
