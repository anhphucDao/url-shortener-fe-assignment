function QR({ isValid }: { isValid: boolean }) {
  return (
    <div
      className={`${isValid ? 'fixed' : 'hidden'} w-full h-full top-0 bg-black/50 flex items-center justify-center`}
    >
      <div className="w-90 h-100 bg-white flex flex-col items-center justify-center rounded-lg p-6 relative overflow-hidden">
        <img
          src="PNG\download.png"
          alt="QR Code"
          className="w-40 h-40 absolute top-5 right-70 z-999 opacity-70"
        />
        <img
          src="PNG\download.png"
          alt="QR Code"
          className="w-30 h-30 absolute left-75 top-17 z-999 opacity-70"
        />
        <div className="w-150 h-60 bg-primary-500 absolute bottom-55 transform -rotate-5"></div>
        <span className="w-7 h-7 bg-white absolute top-0 right-0 m-3 p-3 rounded-full flex items-center justify-center cursor-pointer">
          <span className="material-icons transform scale-75 flex items-center justify-center text-center">
            close
          </span>
        </span>
        <div className="relative w-45 h-45 bg-gray-300 border-2 border-white flex items-center justify-center mb-4 border-10 border-gray-500 rounded-xl z-100">
          <span className="text-gray-500">QR Code</span>
          <span className="flex align-center justify-center bg-primary-500 text-white p-1 rounded-full absolute top-35 left-38 cursor-pointer">
            <span className="material-icons flex align-center justify-center">download</span>
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2 z-100">Link shortened!</h2>
        <p className="text-gray-600 text-sm text-center z-100 ">
          Access the "My URL" page to view statistics on your shortened links.
        </p>
        <div className="flex align-center justify-between gap-2 w-full mt-5">
          <span className="border-primary-500 border-1 flex items-center flex-1 pl-2 rounded-md">
            Your shortened URL
          </span>
          <span className="material-icons bg-primary-500 text-white p-2 rounded-md cursor-pointer">
            content_copy
          </span>
        </div>
      </div>
    </div>
  )
}

export default QR
