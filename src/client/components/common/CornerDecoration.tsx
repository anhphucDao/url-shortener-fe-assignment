interface CornerProps {
  position: string
}

function Corner({ position }: CornerProps) {
  return (
    <div className={`absolute ${position} opacity-30`}>
      <div className="relative h-12 w-12">
        <span className="absolute left-0 top-0 h-4 w-4 border-l-4 border-t-4 border-white" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r-4 border-t-4 border-white" />
        <span className="absolute left-0 bottom-0 h-4 w-4 border-l-4 border-b-4 border-white" />
        <span className="absolute right-0 bottom-0 h-4 w-4 border-r-4 border-b-4 border-white" />
      </div>
    </div>
  )
}

function CornerDecoration() {
  return (
    <>
      <Corner position="left-5 top-8" />
      <Corner position="right-6 top-16" />
    </>
  )
}

export default CornerDecoration
