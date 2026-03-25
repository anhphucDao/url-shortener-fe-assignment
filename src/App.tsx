 
export interface ShortenedURL {
  id: string;
  originalURL: string;
  shortCode: string;
  shortURL: string;
  clicks: number;
  createdAt: string;
}
import {useState} from 'react';
function App() {
  const [urls, setUrls] = useState<ShortenedURL[]>([]);
  const [inputURL, setInputURL] = useState('');
  const [showPopup, setshowPopup] = useState(false);
  const [lastestURL, setlastestURL] = useState<ShortenedURL | null>(null);
  const handleShorten = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (!inputURL) return;
    const newURL: ShortenedURL = {
      id: crypto.randomUUID(),
      originalURL: inputURL,
      shortCode: Math.random().toString(36).substring(2, 7),
      shortURL: `https://dev.camp/${Math.random().toString(36).substring(2, 7)}`,
      clicks: 0,
      createdAt: new Date().toISOString(),
    };
    setUrls([newURL, ...urls]);
    setInputURL('');
    setshowPopup(true);
    setlastestURL(newURL);
  };

  return (
    
    <main className="relative w-full min-h-screen bg-gray-50 flex flex-col items-center py-20 px-4">
    <div className='flex-row w-full h-[108px] top-[0px] left-[0px] justify-between '>
      <img 
        src="/assests/devcamp_logo_navy 1.svg" 
        alt="Devcamp Logo"
        className="absolute w-[96px] h-[74px] left-[40px] top-[17px] object-contain"
      />
      <div className='absolute border rounded-full w-[220px] h-[60px] right-[40px] top-[28px] flex flex-row items-center gap-3 p-3 bg-white shadow-sm'>
  
  <div className="flex-shrink-0">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.12104 17.8037C7.15267 16.6554 9.4998 16 12 16C14.5002 16 16.8473 16.6554 18.879 17.8037M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div className="flex flex-col text-left">
    <p className="text-[12px] font-medium text-gray-400 leading-tight">Personal</p>
    <p className="text-[14px] font-bold text-gray-800 leading-tight">Hoa Username</p>
  </div>

</div>

      </div>
    <div className="flex flex-col items-center w-full gap-4 mt-20">
    <div className="w-[832px] flex flex-col items-center text-center gap-4">
    <h1 className="text-[60px] font-bold text-primary-500 tracking-tight">
      Devcamp URL Shortener
    </h1>
    <h2 className="text-xl font-medium text-primary-100 tracking-tight">
      Simplify, Organize, and Share: URL Management Made Easy
    </h2>
</div>
        <form 
  onSubmit={handleShorten} 
  className=" flex flex-col gap-[15px] p-8 bg-white rounded-2xl shadow-xl border border-gray-100 w-[832px] h-auto"
>
  <p className="font-semibold text-[20px] text-primary-500 text-left">
    Your long URL
  </p>

  <div className="flex gap-[38px] items-center">
    <div className="relative flex-1">
      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
      <input
        type="url"
        required
        placeholder="Input the URL you want to shorten"
        className="w-full h-[42px] pl-12 pr-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-gray-700"
        value={inputURL}
        onChange={(e) => setInputURL(e.target.value)}
      />
    </div>
    
    <button
      type="submit"
      className="bg-primary-500 hover:bg-indigo-700 text-white w-[98px] h-[42px] rounded-xl font-bold transition-all shadow-lg active:scale-95"
    >
      Shorten
    </button>
  </div>
</form>
</div>
    <p className="text-gray-500 text-sm italic">
      Đã rút gọn được: <span className="font-bold text-indigo-500">{urls.length}</span> link
    </p>
    {showPopup && lastestURL && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
      <div className="text-center space-y-4">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
          <span className="text-3xl">🎉</span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800">Done!</h2>
        <p className="text-gray-500 text-sm">Your shortened link:</p>
        
        <div className="bg-gray-50 p-3 rounded-lg border border-dashed border-indigo-300 select-all font-mono text-indigo-600 break-all">
          {lastestURL.shortURL}
        </div>

        <button
          onClick={() => setshowPopup(false)}
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Exit
        </button>
      </div>
    </div>
  </div>
)}
  
</main>

  )
}

export default App