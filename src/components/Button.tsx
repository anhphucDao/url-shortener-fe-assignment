import {
  type ButtonShapeType,
  type ButtonWidthType,
  type ButtonSizeType,
  ButtonShape,
  ButtonWidth,
  ButtonSize,
} from '../types/ButtonVariants'
interface ButtonProps {
  shape?: ButtonShapeType
  width?: ButtonWidthType
  size?: ButtonSizeType
  onClick: () => void
  className?: string
  disabled?: boolean
  children?: React.ReactNode
  icon?: string
}
function Button({
  children,
  className,
  shape = ButtonShape.square,
  width = ButtonWidth.fit,
  size = ButtonSize.sm,
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
