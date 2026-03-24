import { User } from 'lucide-react'
export default function Header() {
  return (
    <header className="bg py-4 px-8 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="GDSC HCMUT Logo" className="h-20 w-auto" />
      </div>
      <div className="w-38 flex items-center gap-2 border-1 border-primary-500 rounded-full bg-white pl-0 pr-4 py-0 hover:bg-neutral-50 transition-colors shadow-inner overflow-hidden">
        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white">
          <User className="w-6 h-6 text-white" fill="currentColor" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-neutral-600 leading-none">Personal</span>
          <span className="text-sm font-medium text-neutral-600 leading-none mt-1">Username</span>
        </div>
      </div>
    </header>
  )
}
