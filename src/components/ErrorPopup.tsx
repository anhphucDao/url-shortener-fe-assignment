import { stopPropagation } from '../utils/events'
import Button from './Button'
import OverlayBackground from './OverlayBackground'
interface ErrorPopupProps {
  onReset: () => void
}
function ErrorPopup({ onReset }: ErrorPopupProps) {
  return (
    <OverlayBackground onReset={onReset}>
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
    </OverlayBackground>
  )
}

export default ErrorPopup
