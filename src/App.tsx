import { useState } from 'react';
import './App.css';

function App() {
  const [urlInput, setUrlInput] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleShorten = async () => {
    if (!urlInput) return;
    setLoading(true);
    try {
      const res = await fetch(`https://tinyurl.com/api-create.php?url=${urlInput}`);
      const data = await res.text();
      setResult(data);
    } catch (error) {
      alert("Error shortening URL");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    }
  };

  return (
    <div className="container">
      <h1>DevCamp URL Shortener</h1>
      
      <div className="card">
        <h2>Enter your URL:</h2>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Paste your link here..." 
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
          <button className="btn-shorten" onClick={handleShorten} disabled={loading}>
            {loading ? "Loading..." : "Shorten"}
          </button>
        </div>
      </div>

      {result && (
        <div className="modal-overlay">
          <div className="result-modal">
            <h3>Your Short Link</h3>
            <div className="modal-content">
              <input readOnly value={result} />
              <button className="btn-copy" onClick={handleCopy}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <button className="btn-close" onClick={() => setResult(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;