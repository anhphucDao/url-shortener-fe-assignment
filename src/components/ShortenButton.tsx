import Button from './Reusable/Button'
function ShortenButton({ onClick, disabled }: { onClick?: () => void; disabled?: boolean }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`w-[98px] h-[42px] rounded-lg text-base font-bold text-shade-white
        ${disabled ? '' : 'bg-primary-500'}
        `}
    >
      Shorten
    </Button>
  )
}
export default ShortenButton
