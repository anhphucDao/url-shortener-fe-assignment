import { CloseIcon, CopyIcon } from './Icons';

interface ResultModalProps {
  shortUrl: string;
  onClose: () => void;
}

const ResultModal = ({ shortUrl, onClose }: ResultModalProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity animate-fadeIn">
      
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-scaleIn">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors p-1 rounded-full hover:bg-neutral-100"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        <div className="bg-[#0B2878] p-10 flex flex-col items-center">
          <div className="bg-white p-3 rounded-xl shadow-inner mb-2">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://devcamp.edu.vn" 
              alt="QR Code"
              className="w-[130px] h-[130px]"
            />
          </div>
        </div>

        <div className="p-8 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-[#0B2878] mb-2">
                Link shortened!
            </h3>
            <p className="text-sm text-primary-500 mb-6 max-w-[280px]">
                Access the “My URL” page to view statistics on your shortened links          
            </p>

            <div className="w-full flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full p-1 pl-6">
                <span className="flex-1 text-sm text-neutral-700 truncate">
                {shortUrl}
                </span>
            
            <button 
              onClick={handleCopy}
              className="bg-[#0B2878] text-white rounded-full p-3 hover:bg-[#081d58] transition-colors active:scale-95 flex-shrink-0"
              title="Copy link"
            >
              <CopyIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResultModal;