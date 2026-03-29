import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

const Button = ({ children, type = 'button', ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  )
}

export default Button