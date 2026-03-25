import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>
export default function Input({ className = '', ...props }: InputProps) {
  return <input className={`outline-none bg-transparent ${className}`} {...props} />
}
