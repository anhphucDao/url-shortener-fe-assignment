import React, { useState } from 'react';

interface ResultModalProps {
  shortUrl: string;
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ shortUrl, onClose }) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); 
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpen = () => {
    window.open(shortUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
      
      <div className="bg-white p-8 pt-10 rounded-xl shadow-2xl w-full max-w-3xl relative animate-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#52c4b3] rounded-full w-8 h-8 flex items-center justify-center text-3xl transition-colors"
          title="Đóng"
        >
          &times;
        </button>

        <div className="bg-[#7df3e1] p-4 flex items-center gap-3 shadow-sm rounded-md">
          <div className="flex-1 bg-white p-4 rounded-md shadow-inner overflow-hidden">
            <span className="text-gray-800 font-bold text-lg break-all">
              {shortUrl}
            </span>
          </div>
          
          <button 
            onClick={handleCopy} 
            className="bg-[#63d9c6] hover:bg-[#52c4b3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52c4b3] text-white font-bold py-3 px-6 rounded-sm transition-all duration-200 text-lg shadow-sm"
          >
            Copy
          </button>
          
          <button 
            onClick={handleOpen} 
            className="bg-[#63d9c6] hover:bg-[#52c4b3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52c4b3] text-white font-bold py-3 px-6 rounded-sm transition-all duration-200 text-lg shadow-sm"
          >
            Open
          </button>
        </div>

        {showToast && (
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
            Đã sao chép link thành công.
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultModal;
