'use client'

import { useState } from 'react'
import { ResultCard } from '../resultCard'

export function ShortenButton() {
  const [showResult, setShowResult] = useState(false)
  return (
    <>
      <button
        type="submit"
        onClick={() => setShowResult(true)}
        className="bg-brand-blue text-shade-white font-bold text-lg px-8 py-1 rounded-full hover:bg-info-700 transition-colors whitespace-nowrap flex-shrink-0"
      >
        Shorten
      </button>
      {showResult && <ResultCard onClose={() => setShowResult(false)} />}
    </>
  )
}
