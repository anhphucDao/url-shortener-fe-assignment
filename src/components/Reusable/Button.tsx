type ButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
}

function Button({ children, onClick, disabled, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center transition
        ${disabled ? 'bg-gray-500 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button
