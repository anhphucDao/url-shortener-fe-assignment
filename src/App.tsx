import Navbar from './components/Navbar'
import CheckerForm from './components/CheckerForm'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <CheckerForm />
      </main>
    </div>
  )
}

export default App
