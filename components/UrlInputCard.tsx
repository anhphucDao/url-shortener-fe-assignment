import type { ChangeEvent } from 'react'

import Button from './Button'

type UrlInputCardProps = {
  urlValue: string
  errorMessage?: string | null
  onUrlChange: (event: ChangeEvent<HTMLInputElement>) => void
  onShorten: () => void
}

const UrlInputCard = ({
  urlValue,
  errorMessage,
  onUrlChange,
  onShorten,
}: UrlInputCardProps) => {
  return (
    <section className="frame-5522-wrapper">
      <div className="frame-5522">
        <div className="frame-5522__title">Devcamp URL Shortener</div>
        <div className="frame-5522__subtitle">
          Simplify, Organize, and Share: URL Management Made Easy
        </div>
        <div className="frame-5522__card">
          <div className="frame-5522__card-head">
            <div className="frame-5522__card-text">Your long URL</div>
          </div>
          <div className="frame-5522__controls">
            <div className="frame-5522__input">
              <div className="frame-5522__input-icon">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 17 17"
                  className="frame-5522__input-icon-svg"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.25 8.5C3.25 7.075 4.40833 5.91667 5.83333 5.91667H7.5V4.33333H5.83333C3.53333 4.33333 1.66667 6.2 1.66667 8.5C1.66667 10.8 3.53333 12.6667 5.83333 12.6667H7.5V11.0833H5.83333C4.40833 11.0833 3.25 9.925 3.25 8.5ZM6.33333 9.33333H9.66667V7.66667H6.33333V9.33333ZM11.1667 4.33333H9.5V5.91667H11.1667C12.5917 5.91667 13.75 7.075 13.75 8.5C13.75 9.925 12.5917 11.0833 11.1667 11.0833H9.5V12.6667H11.1667C13.4667 12.6667 15.3333 10.8 15.3333 8.5C15.3333 6.2 13.4667 4.33333 11.1667 4.33333Z"
                    fill="currentColor"
                    fillOpacity="0.87"
                  />
                </svg>
              </div>
              <div className="frame-5522__input-divider" />
              <input
                className="frame-5522__input-text"
                placeholder="Input the URL you want to shorten"
                value={urlValue}
                onChange={onUrlChange}
              />
            </div>
            <Button className="frame-5522__button" onClick={onShorten}>
              Shorten
            </Button>
          </div>
          {errorMessage && <p className="frame-5522__error">{errorMessage}</p>}
        </div>
      </div>
    </section>
  )
}

export default UrlInputCard