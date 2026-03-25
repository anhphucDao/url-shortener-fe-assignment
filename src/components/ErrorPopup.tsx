import { stopPropagation } from '../utils/events'
import Button from './Button'
interface ErrorPopupProps {
  onReset: () => void
}
function ErrorPopup({ onReset }: ErrorPopupProps) {
  return (
    <div
      className="flex items-center justify-center flex-col min-h-screen min-w-screen absolute z-10 bg-primary-100/50"
      onClick={onReset}
    >
      <div
        className="bg-white py-5 px-10 rounded-xl flex flex-col items-center justify-center"
        onClick={stopPropagation}
      >
        <img src="./error.png" className="w-20 h-20 mb-4 " />
        <p className="text-primary-500 font-medium ">Something went wrong while shortening</p>
        <Button
          className=" bg-primary-500 text-white mt-3 hover:cursor-pointer"
          shape="square"
          size="md"
          onClick={onReset}
        >
          Close
        </Button>
      </div>
    </div>
  )
}

export default ErrorPopup
