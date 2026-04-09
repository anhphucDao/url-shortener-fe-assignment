interface SlantedDividerProps {
  className?: string
}

function SlantedDivider({ className = '' }: SlantedDividerProps) {
  return (
    <div
      className={`h-16 w-full bg-white ${className}`}
      style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }}
    />
  )
}

export default SlantedDivider
