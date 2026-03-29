interface ButtonProperties {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  variant?: 'blue' | 'gray'
  shape?: 'quadrilateral' | 'circle'
  useImage?: string
}

function Button({
  children,
  onClick,
  className = '',
  disabled = false,
  variant = 'blue',
  shape = 'circle',
  useImage,
}: ButtonProperties) {
  const baseClass =
    'flex items-center justify-center font-bold transition-colors hover:cursor-pointer'
  const variantClass = {
    blue: 'bg-primary-500 text-white hover:bg-primary-100 ',
    gray: 'bg-neutral-100 text-white hover:bg-neutral-300 ',
  }
  const disabledClass = disabled ? 'cursor-not-allowed' : 'hover:cursor-pointer'
  const shapeClass = {
    quadrilateral: 'rounded-md',
    circle: 'rounded-full',
  }

  const finalClassName = `${baseClass} ${variantClass[variant]} ${shapeClass[shape]} ${disabledClass} ${className}`
  return (
    <button className={finalClassName} onClick={onClick} disabled={disabled}>
      {children}
      {useImage && <img src={useImage} alt="Btt" />}
    </button>
  )
}
export default Button
