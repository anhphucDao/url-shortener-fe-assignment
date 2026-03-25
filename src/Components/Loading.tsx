export default function Loading() {
  return (
    <div className="relative w-100 h-117 z-31 bg-white rounded-card flex flex-col items-center justify-center ">
      <p className=" font-sans text-primary-500 text-5xl font-bold">Processing...</p>
      <img src="/Loading_icon.svg" />
    </div>
  )
}
