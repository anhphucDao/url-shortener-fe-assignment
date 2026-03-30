import type React from 'react'

interface OverlayBackgroundProps {
  children: React.ReactNode
  onReset: () => void
}

function OverlayBackground({ children, onReset }: OverlayBackgroundProps) {
  return (
    <div
      className="flex items-center justify-center flex-col min-h-screen min-w-screen absolute z-10 bg-primary-100/50"
      onClick={onReset}
    >
      {children}
    </div>
  )
}
export default OverlayBackground
