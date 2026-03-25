interface InputProps {
  value: string
  onChange: (val: string) => void
  placeholder?: string
}
export default function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <input
      className="w-full focus:outline-none"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}
