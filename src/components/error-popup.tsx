interface ErrorPopupProps {
  resetStates: () => void
}
function ErrorPopup({ resetStates }: ErrorPopupProps) {
  return (
    <div
      className="flex items-center justify-center flex-col min-h-screen min-w-screen absolute z-10 bg-[rgba(220,220,220,0.5)]"
      onClick={() => {
        resetStates()
      }}
    >
      <div
        className="bg-white py-5 px-10 rounded-xl flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img src="../public/error.png" className="w-20 h-20 mb-4 " />
        <p className="text-primary-500 font-medium ">Something went wrong while shortening</p>
        <button
          className="px-5 py-2 bg-primary-500 font-medium text-white rounded-lg mt-3 hover:cursor-pointer"
          onClick={() => {
            resetStates()
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ErrorPopup
