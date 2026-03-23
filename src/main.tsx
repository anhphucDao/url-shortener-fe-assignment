import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// main.tsx nơi render toàn bộ ứng dụng React vào DOM. Nó sử dụng ReactDOM để gắn ứng dụng vào phần tử có id 'root' trong index.html. App.tsx là component chính của ứng dụng, nơi chứa cấu trúc và logic của trang web.