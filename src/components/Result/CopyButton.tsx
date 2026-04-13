import Button from '../Reusable/Button'

function CopyButton({ shortenedURL }: { shortenedURL: string }) {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(shortenedURL)
        alert('Copied to clipboard!')
      }}
      className="w-[40px] h-[40px] bg-primary-500 bg-primary-500 absolute bottom-[42px] right-[40px] rounded-lg"
    >
      <img src="/images/copy.svg" className="w-[20px] h-[20px]" />
    </Button>
  )
}
export default CopyButton
