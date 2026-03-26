import Header from './components/Header'
import UrlModal from './components/UrlModal'
import ErrorPopup from './components/ErrorPopup'
import ShortenLinkPopup from './components/ShortenLinkPopup'
import useShortenUrl from './hooks/useShortenUrl'
import HeroSection from './components/HeroSection'
function App() {
  const { isLoading, resetStates, handleShorten, setInputUrl, inputUrl, urlState, setUrlState } =
    useShortenUrl()
  const renderPopup = () => {
    if (urlState.data)
      return <ShortenLinkPopup data={urlState.data} onReset={resetStates} onError={setUrlState} />
    if (urlState.error) return <ErrorPopup onReset={resetStates} />
  }
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
      {renderPopup()}
    </main>
  )
}

export default App
