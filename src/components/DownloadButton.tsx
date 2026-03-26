import Button from './Button'

interface DownloadButtonProps {
  fileUrl: string
  fileName: string
  className?: string
}
function DownloadButton({ fileUrl, fileName, className = '' }: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button
      onClick={handleDownload}
      shape="circle"
      useImage="/downloadbutton.png"
      className={className}
    />
  )
}

export default DownloadButton
