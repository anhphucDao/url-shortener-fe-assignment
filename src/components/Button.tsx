interface ButtonProps {
  shape?: 'round' | 'square'
  width?: 'fit' | 'full'
  size?: 'sm' | 'md' | 'lg'
  onClick: () => void
  className?: string
  disabled?: boolean
  children?: React.ReactNode
  icon?: string
}
function Button({
  children,
  className,
  shape = 'square',
  width = 'fit',
  size = 'sm',
  onClick,
  disabled = false,
  icon,
}: ButtonProps) {
  const sizeAttr = {
    sm: ' h-8 text-sm',
    md: ' h-10 text-md',
    lg: ' h-12 text-lg',
  }
  const BaseClassName =
    (shape === 'round' ? ' rounded-full' : ' rounded-lg') +
    (width === 'fit' ? ' w-fit' : ' w-full') +
    sizeAttr[size] +
    (icon ? ' aspect-square p-2' : ' px-5 py-3') +
    ' flex items-center justify-center font-bold hover:cursor-pointer transition-all duration-300'
  return (
    <button className={`${BaseClassName} ${className}`} onClick={onClick} disabled={disabled}>
      {icon && <img src={icon} />}
      {children}
    </button>
  )
}
export default Button
