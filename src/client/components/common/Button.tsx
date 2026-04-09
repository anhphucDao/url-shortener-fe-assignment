import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
  title?: string
  type?: 'button' | 'submit' | 'reset'
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  onClick,
  className = '',
  title,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-semibold transition disabled:opacity-60 rounded-xl'

  const variantStyles: Record<string, string> = {
    primary: 'bg-[#0B2A7B] hover:bg-[#091f5d] text-white',
    secondary: 'border border-gray-200 bg-white hover:bg-gray-50 text-gray-900',
    icon: 'bg-[#0B2A7B] hover:bg-[#091f5d] text-white',
  }

  const sizeStyles: Record<string, string> = {
    sm: 'h-8 w-8 flex items-center justify-center text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={combinedClassName}
      title={title}
    >
      {children}
    </button>
  )
}

export default Button
