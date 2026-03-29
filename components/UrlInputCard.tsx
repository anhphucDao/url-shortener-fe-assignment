import type { ChangeEvent } from 'react'

import Button from './Button'
import { LinkIcon } from './Icons'

interface UrlInputCardProps {
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
                <LinkIcon className="frame-5522__input-icon-svg" />
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