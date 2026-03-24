import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'icon' | 'rounded'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'transition-colors flex items-center justify-center flex-shrink-0'

  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-500/90 text-white font-semibold py-3 px-8 rounded-lg',
    icon: 'bg-primary-500 text-white p-2.5 rounded-lg hover:bg-primary-700',
    rounded:
      'absolute -bottom-3 -right-3 bg-primary-500 text-white rounded-full p-2 border-4 border-white shadow-sm hover:bg-primary-700',
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
