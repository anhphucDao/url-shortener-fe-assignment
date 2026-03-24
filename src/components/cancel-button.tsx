interface CancelButtonProps {
  onReset: () => void
}
function CancelButton({ onReset }: CancelButtonProps) {
  return (
    <>
      <button
        onClick={onReset}
        className="bg-white rounded-full z-10 p-1.5 absolute top-3 right-3 hover:cursor-pointer"
      >
        <img src="./cancel.svg" />
      </button>
    </>
  )
}
export default CancelButton
