type ShortenModalProps = {
  isOpen: boolean
  shortenedUrl: string
  isCopySuccess: boolean
  onClose: () => void
  onCopy: () => void
}

const ShortenModal = ({
  isOpen,
  shortenedUrl,
  isCopySuccess,
  onClose,
  onCopy,
}: ShortenModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="shorten-modal">
      <div className="shorten-modal__container">
        <div className="shorten-modal__confirmation">
          <div className="shorten-modal__regtangle-515">
            <svg
              width="52"
              height="80"
              viewBox="0 0 52 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shorten-modal__rectangle-515-item shorten-modal__rectangle-515-item--24"
            >
              <g opacity="0.2">
                <rect
                  x="0.5"
                  y="0.5"
                  width="16.7778"
                  height="3.44444"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="3.94446"
                  y="0.5"
                  width="16.7778"
                  height="3.44444"
                  transform="rotate(90 3.94446 0.5)"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="0.5"
                  y="-0.5"
                  width="16.7778"
                  height="3.44444"
                  transform="matrix(1 0 0 -1 0 79)"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="-0.5"
                  y="-0.5"
                  width="16.7778"
                  height="3.44444"
                  transform="matrix(0 -1 -1 0 3.44446 79)"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="9.38889"
                  y="9.38892"
                  width="25.6667"
                  height="25.6667"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="44.9445"
                  y="9.38892"
                  width="25.6667"
                  height="25.6667"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="44.9445"
                  y="44.9445"
                  width="7.88889"
                  height="7.88889"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="44.9445"
                  y="62.7222"
                  width="7.88889"
                  height="7.88889"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="9.38889"
                  y="44.9445"
                  width="25.6667"
                  height="25.6667"
                  fill="white"
                  stroke="white"
                />
              </g>
            </svg>
            <svg
              width="52"
              height="80"
              viewBox="0 0 52 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shorten-modal__rectangle-515-item shorten-modal__rectangle-515-item--25"
            >
              <g opacity="0.3">
                <rect
                  x="-0.5"
                  y="0.5"
                  width="16.7778"
                  height="3.44444"
                  transform="matrix(-1 0 0 1 51 0)"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16.7778"
                  height="3.44444"
                  transform="matrix(0 1 1 0 47.5556 0)"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="51.5"
                  y="79.5"
                  width="16.7778"
                  height="3.44444"
                  transform="rotate(180 51.5 79.5)"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="48.0556"
                  y="79.5"
                  width="16.7778"
                  height="3.44444"
                  transform="rotate(-90 48.0556 79.5)"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="-18.6111"
                  y="9.38892"
                  width="25.6667"
                  height="25.6667"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="16.9444"
                  y="9.38892"
                  width="25.6667"
                  height="25.6667"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="16.9444"
                  y="44.9445"
                  width="7.88889"
                  height="7.88889"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="16.9444"
                  y="62.7222"
                  width="7.88889"
                  height="7.88889"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="25.8333"
                  y="53.8333"
                  width="7.88889"
                  height="7.88889"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="34.7222"
                  y="44.9445"
                  width="7.88889"
                  height="7.88889"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="34.7222"
                  y="62.7222"
                  width="7.88889"
                  height="7.88889"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="-18.6111"
                  y="44.9445"
                  width="25.6667"
                  height="25.6667"
                  fill="white"
                  stroke="white"
                />
              </g>
            </svg>
            {/* <img
              src="/Component 24.svg"
              alt=""
              aria-hidden="true"
              className="shorten-modal__rectangle-515-item shorten-modal__rectangle-515-item--24"
            />
            <img
              src="/Component 25.svg"
              alt=""
              aria-hidden="true"
              className="shorten-modal__rectangle-515-item shorten-modal__rectangle-515-item--25"
            /> */}
          </div>
          <button
            className="shorten-modal__close"
            type="button"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="shorten-modal__close-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="shorten-modal__qr">
            <img
              src="/image 101.png"
              alt="QR code for shortened URL"
              className="shorten-modal__qr-placeholder"
            />
          </div>
          <div className="shorten-modal__title">Link shortened!</div>
          <div className="shorten-modal__subtitle">
            Access the “My URL” page to view statistics on your shortened links
          </div>
          <div className="shorten-modal__url-row">
            <span className="shorten-modal__url-text">{shortenedUrl}</span>
            <button
              className="shorten-modal__copy"
              type="button"
              aria-label="Copy shortened URL"
              onClick={onCopy}
            >
              {isCopySuccess ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="shorten-modal__copy-icon"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="shorten-modal__copy-icon"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 7V5C8 3.89543 8.89543 3 10 3H18C19.1046 3 20 3.89543 20 5V13C20 14.1046 19.1046 15 18 15H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="4"
                    y="7"
                    width="12"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShortenModal
