import { useState, useEffect } from "react";
import { Images } from "./Images";


// Logo Prometheus
function Logo() {
  return (
    <div className="flex flex-col items-start cursor-pointer select-none">
      <img src={Images.logo} alt="Prometheus Logo" className="w-30 h-30 object-contain hover:scale-110 transition-transform" />
    </div>
  );
}

// User Pill 
function UserPill() {
  return (  // WHY TAILWIND WHY CSS
    <div className="flex items-center gap-4 border border-[#999999] rounded-full pl-1.5 pr-4 py-2 cursor-pointer hover:border-[#6D7EAE] transition-colors duration-200 bg-[#FFFFFF] shadow-md">
      <img src={Images.person} alt="person icon" className="h-11 w-11 rounded-full" />
      <div>
        <p className="text-sm text-[#999999] leading-none text-[12px]">Personal</p>
        <p className="text-lg font-semibold text-[#0B2878] leading-none mt-1">Username</p>
      </div>
    </div>
  );
}

// NavBar
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm mt-10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <UserPill />
      </div>
    </nav>
  );
}

// Popup_noti feedback
function Popup_noti({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0F9D58] text-[#FFFFFF] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md transition-all duration-300 whitespace-nowrap ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"}`}>
      {message}
    </div>
  );
}

// QR Modal
const SHORTENED_URL = "https://furl.one/myshortenlink";

function QRModal({ onClose }: { onClose: () => void }) {
  const [copyToast, setCopyToast] = useState(false);
  const [downloadToast, setDownloadToast] = useState(false);
  
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => { // Click backgronund -> exit
    if (e.target === e.currentTarget) onClose();
  };
  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  
  const handleCopy = () => { // When pressed it make the user copied the content
    navigator.clipboard.writeText(SHORTENED_URL).catch(() => {});
    setCopyToast(true);
    setTimeout(() => setCopyToast(false), 2000);
  };

  const handleDownload = () => { // dowloading function, do later
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/40 backdrop-blur-[2px] animate-fadein"
      onClick={handleBackdrop}
    >
      <div className="relative bg-[#FFFFFF] rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden animate-popin">

        {/* Close button */}
        <button
          onClick={onClose} className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-[#F2F2F2] text-[#999999] hover:text-[#1A1A1A] transition-colors shadow">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* QR code header*/}
        <div className="bg-[#0B2878] flex flex-col items-center pt-8 pb-6 px-8 gap-4">
          <div className="bg-[#FFFFFF] rounded-xl p-2 shadow-lg">
            <img src={Images.qrcode} alt="QR Code" className="w-40 h-40 block" />
          </div>

          {/* Download button */}
          <div className="relative">
            <button onClick={handleDownload} className="flex items-center gap-2 bg-[#0B2878] hover:bg-[#6D7EAE] active:bg-[#0B2878] border border-[#FFFFFF]/20 text-[#FFFFFF] text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer" >
              Download QR
            </button>
            <Popup_noti message="Downloaded!" visible={downloadToast} />
          </div>
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          <p className="text-lg font-bold text-[#0B2878] text-center mb-1">Link shortened!</p>
          <p className="text-[12px] text-[#808080] text-center mb-5 leading-snug">
            Access the "My URL" page to view statistics<br />on your shortened links
          </p>

          {/* Shortened link row */}
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input type="text" readOnly value={SHORTENED_URL} className="w-full text-[13px] text-[#0B2878] font-medium bg-[#F2F2F2] border border-[#CCCCCC] rounded-lg px-3 py-2.5 outline-none select-all cursor-text"/>
            </div>

            {/* Copy button */}
            <div className="relative">
              <button
                onClick={handleCopy}
                className="w-10 h-10 flex items-center justify-center bg-[#0B2878] hover:bg-[#6D7EAE] active:bg-[#0B2878] rounded-lg text-[#FFFFFF] transition-colors cursor-pointer shrink-0"
                title="Copy link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
              </button>
              <Popup_noti message="Copied!" visible={copyToast} />
            </div>
          </div>
        </div>
      </div>

      {/* This piece of shit handling the animation to make it smoother and more natural */}
      <style>{`
        @keyframes fadein { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popin  { from { opacity: 0; transform: scale(0.93) translateY(10px) } to { opacity: 1; transform: scale(1) translateY(0) } }
        .animate-fadein { animation: fadein 0.2s ease both; }
        .animate-popin  { animation: popin  0.25s cubic-bezier(0.34,1.56,0.64,1) both; }
      `}</style>
    </div>
  );
}

// ShortenerCard
function ShortenerCard() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShorten = () => {
    if (!url.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleShorten();
  };

  return (
    <>
      <div className="bg-[#FFFFFF] rounded-2xl shadow-lg shadow-[#CCCCCC]/80 border border-[#E6E6E6] p-8 w-full max-w-2xl">
        <p className="text-sm font-bold text-[#0B2878] mb-3 text-[19px]">Your long URL</p>

        <div className="flex items-center gap-0 border border-[#CCCCCC] rounded-xl overflow-hidden focus-within:border-[#0B2878] focus-within:ring-2 focus-within:ring-[#6D7EAE]/10 transition-all duration-200">
          <div className="flex items-center pl-4 pr-3 text-[#999999] shrink-0">
            <img src={Images.link} alt="link icon" className="h-3.5 opacity-65" />
          </div>
          <div className="w-px h-6 bg-[#CCCCCC] shrink-0" />

          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Input the URL you want to shorten"
            className="flex-1 text-sm text-[#666666] placeholder-[#999999] outline-none bg-transparent px-3 py-3.5"
          />

          <button
            onClick={handleShorten}
            disabled={loading}
            className="m-1.5 px-6 py-2.5 bg-[#0B2878] hover:bg-[#6D7EAE] active:bg-[#0B2878] disabled:opacity-60 text-[#FFFFFF] text-sm font-semibold rounded-lg transition-colors duration-200 shrink-0 cursor-pointer min-w-[90px] text-center"
          >
            {loading ? (
              <span className="inline-flex gap-1 items-center justify-center">
                <span className="animate-bounce" style={{ animationDelay: "0ms" }}>·</span>
                <span className="animate-bounce" style={{ animationDelay: "150ms" }}>·</span>
                <span className="animate-bounce" style={{ animationDelay: "300ms" }}>·</span>
              </span>
            ) : "Shorten"}
          </button>
        </div>
      </div>

      {showModal && <QRModal onClose={() => setShowModal(false)} />}
    </>
  );
}

// TitleCard
function TitleCard() {
  return (
    <section className="min-h-screen bg-[#F2F2F2] flex flex-col items-center justify-center px-6 pt-16">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-[#0B2878] tracking-tight mb-4">
          Devcamp URL Shortener
        </h1>
        <p className="text-lg text-[#666666] font-normal">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>
      </div>
      <ShortenerCard />
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans">
      <Navbar />
      <TitleCard />
    </div>
  );
}