import Header from './components/header'
import UrlModal from './components/url-modal'
import ErrorPopup from './components/error-popup'
import ShortenLinkPopup from './components/shorten-link-popup'
import useShortenUrl from './utils/useShortenUrl'
import HeroSection from './components/hero-section'
function App() {
  const { isLoading, resetStates, handleShorten, setInputUrl, inputUrl, urlState, setUrlState } =
    useShortenUrl()
  return (
    <main className="min-h-screen flex items-center justify-center flex-col text-center">
      <Header />
      <HeroSection />
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
