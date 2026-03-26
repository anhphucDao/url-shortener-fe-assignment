import Button from './Button'
import { downloadFile } from '../utils/downloadlogic'

interface DownloadButtonProps {
  fileUrl: string
  fileName: string
  className?: string
}
function DownloadButton({ fileUrl, fileName, className = '' }: DownloadButtonProps) {
  const handleDownload = () => {
    downloadFile(fileUrl, fileName)
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
