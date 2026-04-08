import Header from './components/Header'
import ShortenerCard from './components/ShortenerCard'

export default function App() {
  return (
    <div className="flex flex-col bg-[#f7f7f7]">
      <Header />

      <ShortenerCard />
    </div>
  )
}
