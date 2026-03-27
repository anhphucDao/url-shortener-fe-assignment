import { useState } from 'react';
import Navbar from './Navbar.tsx'
import ShortenForm from './ShortenForm.tsx'
import Popup from './Popup.tsx'
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShortenSubmit = () => {
    console.log("Đã bấm nút Shorten!");
    setIsModalOpen(true);
  };
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Navbar />

      <ShortenForm onSubmit={handleShortenSubmit} />

      <Popup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        shortLink="https://slug/myshortenlink"
        qrCodeUrl="src/img/av.jpg"
      />
    </main >
  )
}

export default App
