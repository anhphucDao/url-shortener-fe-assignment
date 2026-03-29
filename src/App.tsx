import Header from './Header'
import ShortenForm from './shortTen'
import './App.css' // File này chứa layout tổng cho cả trang

function App() {
  return (
    <div className="app-container">
      {}
      <Header />

      {/* body */}
      <main className="main-content">
        <h1 className="hero-title">Devcamp URL Shortener</h1>
        <p className="hero-subtitle">Simplify, Organize, and Share: URL Management Made Easy</p>

        {}
        <ShortenForm />
      </main>
    </div>
  )
}

export default App

// App.tsx is the parent component containing child components such as Header and ShortenForm. It also contains HTML elements to create the structure of the webpage, including the title and description. App.css is used to style the entire page, ensuring that the user interface is visually appealing and easy to use.
