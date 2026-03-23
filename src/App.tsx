import { useMemo, useState } from 'react'
import Header from './components/header'
import UrlModal from './components/url-modal'
import ErrorPopup from './components/error-popup'
import ShortenLinkPopup from './components/shorten-link-popup'
function App() {
  const [inputUrl, setInputUrl] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [responseData, setResponseData] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isCopied, setCopied] = useState(false)
  const showPopup = useMemo(() => {
    return !isError && isLoading && responseData != null
  }, [isError, isLoading, responseData])
  const resetStates = () => {
    setError(false)
    setLoading(false)
    setResponseData(null)
  }
  return (
    <main className="min-h-screen flex items-center justify-center flex-col text-center">
      <Header />
      <h1 className="-mt-20 w-[80%] md:w-full md:-mt-24 text-4xl md:text-6xl font-bold text-primary-500">
        Devcamp URL Shortener
      </h1>
      <h2 className="w-[80%] md:w-full text-lg md:text-[28px] mt-5 text-primary-500">
        Simplify, Organize, and Share: URL Management Made Easy
      </h2>
      <UrlModal
        inputUrl={inputUrl}
        setInputUrl={setInputUrl}
        isLoading={isLoading}
        setLoading={setLoading}
        setError={setError}
        setResponseData={setResponseData}
      />
      {isError && <ErrorPopup resetStates={resetStates} />}
      {
        //responseData included because Typescript null check do not accept checking inside showPopup
        showPopup && responseData && (
          <ShortenLinkPopup
            imageLoaded={imageLoaded}
            setImageLoaded={setImageLoaded}
            isCopied={isCopied}
            setCopied={setCopied}
            responseData={responseData}
            setError={setError}
            resetStates={resetStates}
          />
        )
      }
    </main>
  )
}

export default App
