import { Header } from './components/Header/Header'
import { ShortenContainer } from './components/ShortenContainer/ShortenContainer'
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <Header />
      <ShortenContainer />
    </div>
  )
}

export default App
