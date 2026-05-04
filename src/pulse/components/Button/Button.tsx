import React from 'react'

interface ButtonProps {
  text: string
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-teal-600 text-white text-3xl font-bold px-16 py-4 rounded-xl 
                 shadow-[4px_6px_0px_0px_#2c7a70] 
                 hover:translate-x-1 hover:translate-y-1 transition 
                 font-poppins disabled:opacity-50"
    >
      {text}
    </button>
  )
}

export default Button
