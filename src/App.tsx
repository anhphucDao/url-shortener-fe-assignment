import Header from './components/Header'
import UrlModal from './components/UrlModal'
import ErrorPopup from './components/ErrorPopup'
import ShortenLinkPopup from './components/ShortenLinkPopup'
import useShortenUrl from './hooks/useShortenUrl'
import HeroSection from './components/HeroSection'
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
