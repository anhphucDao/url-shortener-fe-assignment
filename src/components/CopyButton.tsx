function CopyButton({ textToCopy }: { textToCopy: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
  }
  return (
    <button
      onClick={handleCopy}
      className="flex items-center justify-center bg-primary-500 w-10 h-10 rounded-lg ml-1 hover:bg-blue-900 transition-colors"
    >
      <img src="/Copybutton.png" alt="Copy" className="w-6 h-6" />
    </button>
  )
}

export default CopyButton
