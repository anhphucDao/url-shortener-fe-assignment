import { type InputHTMLAttributes, type Ref } from 'react'

export type InputVariant = 'ghost' | 'bordered'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant
  className?: string
  ref?: Ref<HTMLInputElement>
}

const baseClass = 'w-full text-brand-navy placeholder:text-brand-navy/50 focus:outline-none'

const variantClass: Record<InputVariant, string> = {
  ghost:
    'ml-3 h-full border-l border-brand-navy/20 bg-transparent pl-3 text-base font-medium focus:ring-2 focus:ring-brand-navy',
  bordered: 'flex-1 rounded-lg border px-3 py-2 text-sm',
}

function Input({ variant = 'bordered', className = '', ref, ...props }: InputProps) {
  const classes = [baseClass, variantClass[variant], className].filter(Boolean).join(' ')

  return <input ref={ref} className={classes} {...props} />
}

export default Input
