import { useState } from 'react';
interface Popup {
    onSubmit: (url: string) => void;
}
function ShortenForm({ onSubmit }: Popup) {
    const [inputUrl, setInputUrl] = useState('');

    const handleShorten = () => {
        onSubmit(inputUrl);
    };
    return (
        <div className="wrapper-box">
            <div className="shortenbox">
                <h1 className="header1">Devcamp URL Shortener</h1>
                <h2 className="header2">Simplify, Organize, and Share: URL Management Made Easy</h2>

                <div className="box">
                    <div className="box-text">
                        <p className="text">Your long URL</p>
                    </div>
                    <form className="input-form">
                        <input className="input-form-input" type="url" placeholder="Input the URL you want to shorten" value={inputUrl}
                            onChange={e => setInputUrl(e.target.value)} />
                        <button className="input-form-button" type="button" onClick={handleShorten}>Shorten</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ShortenForm;

