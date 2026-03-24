interface CancelButtonProps {
  resetStates: () => void
}
function CancelButton({ resetStates }: CancelButtonProps) {
  return (
    <>
      <button
        onClick={resetStates}
        className="bg-white rounded-full z-10 p-1.5 absolute top-3 right-3 hover:cursor-pointer"
      >
        <img src="../public/cancel.svg" />
      </button>
    </>
  )
}
export default CancelButton
