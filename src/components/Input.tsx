interface InputProperties {
  placeholder?: string
  value?: string
  readOnly?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}
function Input({ placeholder, value, readOnly, onChange, className }: InputProperties) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      onChange={onChange}
      className={`flex flex-1 text-primary-500 focus:outline-none transition-all${className}`}
    />
  )
}

export default Input
