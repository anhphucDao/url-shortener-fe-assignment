import Header from './Header';
import ShortenForm from './ShortenForm';
import './App.css'; // File này chứa layout tổng cho cả trang

function App() {
  return (
    <div className="app-container">
      {}
      <Header />

      {/* body */}
      <main className="main-content">
        <h1 className="hero-title">Devcamp URL Shortener</h1>
        <p className="hero-subtitle">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>

        {}
        <ShortenForm />
      </main>
    </div>
  );
}

export default App;

// App.tsx là components cha chứa các components con như Header và ShortenForm. Nó cũng chứa các phần tử HTML để tạo cấu trúc cho trang web, bao gồm tiêu đề và mô tả. App.css được sử dụng để định kiểu cho toàn bộ trang, đảm bảo rằng giao diện người dùng đẹp mắt và dễ sử dụng.