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
    const { isSuccess, data } = urlState
    if (isSuccess === false) return <ErrorPopup onReset={resetStates} />
    if (isSuccess && data)
      return <ShortenLinkPopup data={data} onReset={resetStates} onError={setUrlState} />
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
