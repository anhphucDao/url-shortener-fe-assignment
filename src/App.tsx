import { Logo, UserIcon } from './components/Icons'
import Hero from './components/Hero'
import { useState } from 'react'
import Result from './components/Result'

function App() {
  const [showResult, setShowResult] = useState(true); 
  const [shortenedUrl/*, setShortenedUrl*/] = useState('https://furl.one/myshortenlink');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-white flex justify-between items-center px-10 py-[17px]">
        
        <div className="flex-shrink-0">
          <Logo className="w-[96px] h-[74px]" />
        </div>

        <div className="flex items-center border border-primary-500 rounded-full p-0 pr-6 gap-3">
          <UserIcon className="w-[52px] h-[52px] flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-xs text-neutral-500">Personal</span>
            <span className="text-sm font-medium text-neutral-800 -mt-0.5">Username</span>
          </div>
        </div>

      </header>

      <main className="flex-1 flex items-center justify-center">
        <Hero onShorten={() => setShowResult(true)} />
      </main>

      {showResult && (
        <Result 
          shortUrl={shortenedUrl} 
          onClose={() => setShowResult(false)} 
        />
      )}

    </div>
  )
}

export default App