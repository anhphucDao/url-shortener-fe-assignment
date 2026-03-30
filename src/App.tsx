import { useState } from 'react'
// components
import Header from './components/Header'
import QrModal from './components/QrModal'
import Toast from './components/Toast'
import UrlForm from './components/UrlForm'
// hooks
import useClipboard from './hooks/useClipboard'
import useShortenUrl from './hooks/useShortenUrl'

function App() {
  const [showPopup, setShowPopup] = useState(false)

  const { url, setUrl, shortened, loading, toastError, handleShorten } = useShortenUrl()
  const { copySuccess, handleCopy } = useClipboard(shortened)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const shortenedResult = await handleShorten()

    if (shortenedResult) {
      setShowPopup(true)
    }
  }

  function renderQrModal() {
    if (!showPopup) {
      return null
    }

    return (
      <QrModal
        shortened={shortened}
        copySuccess={copySuccess}
        onClose={() => setShowPopup(false)}
        onCopy={handleCopy}
      />
    )
  }

  function renderToast() {
    if (!toastError) {
      return null
    }

    return <Toast message={toastError} />
  }

  return (
    <div className="min-h-screen bg-white text-brand-navy">
      <Header />

      <main className="mx-auto flex min-h-[calc(100vh-108px)] w-full max-w-[1920px] items-center justify-center px-4 py-1 sm:px-8 lg:px-12">
        <UrlForm url={url} loading={loading} onUrlChange={setUrl} onSubmit={handleSubmit} />
      </main>

      {renderQrModal()}

      {renderToast()}
    </div>
  )
}

export default App
