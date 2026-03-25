import Navbar from './Navbar'
import Content from './Content'

const App = () => {
  return (
    <div>
      <main className="min-h-screen flex items-center justify-center">
        <Navbar />
        <Content></Content>
      </main>
    </div>
  )
}

export default App
