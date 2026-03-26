import Button from './Button'
function CopyButton({ textToCopy }: { textToCopy: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      console.log('Text copied to clipboard: ', textToCopy)
      alert('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }
  return (
    <Button
      onClick={handleCopy}
      shape="quadrilateral"
      useImage="/copybutton.png"
      className="w-10 h-10 ml-1 p-2"
    ></Button>
  )
}

export default CopyButton
