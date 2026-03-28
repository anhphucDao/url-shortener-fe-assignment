import { type InputHTMLAttributes } from 'react'

type InputVariant = 'url' | 'readonly'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant
  className?: string
}

const baseClass = 'w-full text-brand-navy placeholder:text-brand-navy/50 focus:outline-none'

const variantClass: Record<InputVariant, string> = {
  url: 'ml-3 h-full border-l border-brand-navy/20 bg-transparent pl-3 text-base font-medium focus:ring-2 focus:ring-brand-navy',
  readonly: 'flex-1 rounded-lg border border-brand-navy/25 bg-white px-3 py-2 text-sm',
}

function Input({ variant = 'url', className = '', ...props }: InputProps) {
  const classes = [baseClass, variantClass[variant], className].filter(Boolean).join(' ')

  return <input className={classes} {...props} />
}

export default Input
