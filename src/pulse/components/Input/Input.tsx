import React from 'react'
import { Link } from 'lucide-react'

interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <div className="bg-[#e0f7f4] p-3 rounded-full w-full shadow-inner flex items-center border border-[#b2ebe2] max-w-2xl">
      <div className="p-3 bg-white rounded-md mx-2 shadow-sm flex items-center justify-center border border-gray-100">
        <Link className="h-7 w-7 text-gray-500" />
      </div>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Dán link vào đây..."
        className="flex-grow p-4 text-xl bg-white focus:outline-none rounded-md border border-gray-200 shadow-sm"
      />
    </div>
  )
}

export default Input
