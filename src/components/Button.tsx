import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonShape = 'circle' | 'square' | 'rectangle' | 'pill'
type ButtonVariant = 'text' | 'contained' | 'outlined'
type ButtonSize = 'small' | 'medium' | 'large'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  shape?: ButtonShape
  size?: ButtonSize
  isLoading?: boolean
  loadingText?: ReactNode
  children: ReactNode
  className?: string
}

function Button(props: ButtonProps) {
  const shapeClass = {
    circle: 'rounded-full',
    square: 'rounded-lg',
    rectangle: 'rounded-xl',
    pill: 'rounded-full',
  }

  const variantClass = {
    text: 'bg-transparent text-current',
    contained: 'bg-brand-navy text-white',
    outlined: 'border border-brand-navy/30 bg-transparent text-brand-navy',
  }

  const sizeClass = {
    circle: {
      small: 'h-8 w-8',
      medium: 'h-10 w-10',
      large: 'h-12 w-12',
    },
    square: {
      small: 'h-8 w-8',
      medium: 'h-10 w-10',
      large: 'h-12 w-12',
    },
    rectangle: {
      small: 'h-10',
      medium: 'h-12',
      large: 'h-14',
    },
    pill: {
      small: 'h-10',
      medium: 'h-11',
      large: 'h-12',
    },
  }

  //default button
  const {
    children,
    className = '',
    type = 'button',
    shape = 'circle',
    variant = 'text',
    size = 'medium',
    isLoading = false,
    loadingText,
    disabled,
    'aria-busy': ariaBusy,
    ...buttonProps
  } = props

  return (
    <button
      type={type}
      className={`flex cursor-pointer items-center justify-center transition hover:scale-110 ${shapeClass[shape]} ${sizeClass[shape][size]} ${variantClass[variant]} ${className}`}
      disabled={disabled || isLoading}
      aria-busy={ariaBusy || isLoading}
      {...buttonProps}
    >
      {isLoading ? (
        <>
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current/40 border-t-current"
            aria-hidden="true"
          />
          <span>{loadingText ?? children}</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}

const MemoButton = memo(Button)

export { MemoButton as Button }
