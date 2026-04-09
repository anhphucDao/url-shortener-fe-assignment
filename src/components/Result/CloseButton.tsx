import Button from '../Reusable/Button'

function CloseButton({ onClose }: { onClose?: () => void }) {
  return (
    <Button
      onClick={onClose}
      className="w-[32px] h-[32px] absolute top-[12px] right-[12px] text-gray-800 bg-gray-300 rounded-full text-base"
    >
      <img src="public/images/close.svg" className="w-[20px] h-[20px]" />
    </Button>
  )
}
export default CloseButton
