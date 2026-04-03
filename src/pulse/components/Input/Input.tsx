import React from 'react'
import { Link } from 'lucide-react'

interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <div className="bg-[#7df3e1] p-3 w-full shadow-md flex items-center gap-3 transition-all duration-200 focus-within:ring-4 focus-within:ring-[#a8f2e7]">
      <div className="p-3 bg-white rounded-sm shadow-sm flex items-center justify-center">
        <Link className="h-6 w-6 text-gray-500" />
      </div>

      <input
        type="url"
        value={value}
        onChange={onChange}
        placeholder="Dán link vào đây..."
        className="flex-grow p-3 text-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#52c4b3] rounded-sm shadow-inner text-gray-800 transition-all"
        required
      />
    </div>
  )
}

export default Input
