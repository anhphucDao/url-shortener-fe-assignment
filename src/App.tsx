import Header from './components/header'
import UrlModal from './components/url-modal'
import ErrorPopup from './components/error-popup'
import ShortenLinkPopup from './components/shorten-link-popup'
import useShortenUrl from './utils/useShortenUrl'
function App() {
  const { isLoading, resetStates, handleShorten, setInputUrl, inputUrl, urlState, setUrlState } =
    useShortenUrl()

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
        onShorten={handleShorten}
        setInputUrl={setInputUrl}
        isLoading={isLoading}
        inputUrl={inputUrl}
      />
      {urlState.error && <ErrorPopup onReset={resetStates} />}
      {urlState.data && (
        <ShortenLinkPopup data={urlState.data} onReset={resetStates} onError={setUrlState} />
      )}
    </main>
  )
}

export default App
