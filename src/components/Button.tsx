import { toast } from 'react-toastify'
import { downloadFile } from '../utils/downloadlogic'

interface ButtonProperties {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  variant?: 'blue' | 'gray'
  shape?: 'quadrilateral' | 'circle'
  useImage?: string
  Type?: 'default' | 'copy' | 'download'
  textToCopy?: string
  fileUrl?: string
  fileName?: string
}

function Button({
  children,
  onClick,
  className = '',
  disabled = false,
  variant = 'blue',
  shape = 'circle',
  useImage,
  Type = 'default',
  textToCopy,
  fileUrl,
  fileName,
}: ButtonProperties) {
  const baseClass =
    'flex items-center justify-center font-bold transition-colors hover:cursor-pointer'
  const variantClass = {
    blue: 'bg-primary-500 text-white hover:bg-primary-100 ',
    gray: 'bg-neutral-100 text-white hover:bg-neutral-300 ',
  }
  const disabledClass = disabled ? 'cursor-not-allowed' : 'hover:cursor-pointer'
  const shapeClass = {
    quadrilateral: 'rounded-md',
    circle: 'rounded-full',
  }

  const finalClassName = `${baseClass} ${variantClass[variant]} ${shapeClass[shape]} ${disabledClass} ${className}`
  const handleLogic = async () => {
    if (Type === 'copy' && textToCopy) {
      try {
        await navigator.clipboard.writeText(textToCopy)
        toast.success('Link copied to clipboard!')
      } catch {
        toast.error('Failed to copy link!')
      }
    }
    if (Type === 'download' && fileUrl && fileName) {
      try {
        downloadFile(fileUrl, fileName)
      } catch {
        toast.error('Failed to download file!')
      }
    }
    if (onClick) {
      onClick()
    }
  }
  return (
    <button className={finalClassName} onClick={handleLogic} disabled={disabled}>
      {children}
      {useImage && <img src={useImage} alt="Btt" />}
    </button>
  )
}
export default Button
