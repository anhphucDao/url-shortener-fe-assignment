import Button from '../Reusable/Button'

function DownloadButton() {
  return (
    <Button
      onClick={() => alert('Downloaded!')}
      className="w-[40px] h-[40px] absolute top-[200px] left-[200px] bg-primary-500 rounded-full"
    >
      <img src="images/download_icon.svg" className="w-[28px] h-[28px]" />
    </Button>
  )
}
export default DownloadButton
