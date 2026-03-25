import React from 'react';
import './App.css';

interface Popup {
    isOpen: boolean;
    onClose: () => void;
    shortLink?: string;
    qrCodeUrl?: string;
}

const ShortenModal: React.FC<Popup> = ({
    isOpen,
    onClose,
    shortLink = '',
    qrCodeUrl = ''
}) => {
    if (!isOpen) return null;

    const handleCopy = () => {
        if (shortLink) {
            navigator.clipboard.writeText(shortLink);
            alert('Đã copy đường link!');
        }
    };

    return (
        <div className="modal-overlay">
            <div className='modal-container'>
                <div className='close-button-container'>
                    <button className="close-button" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="link-section">
                    <div className="qr-section">
                        <div className="qr-box">
                            {qrCodeUrl ? (
                                <img src={qrCodeUrl} alt="QR Code" className="qr-image" />
                            ) : (
                                <span className="qr-placeholder-text">QR Code</span>
                            )}
                        </div>
                        <div className="download-button-container">
                            <button className="download-button" title="Download QR">
                                <span aria-hidden="true">&#8595;</span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h1>Link shortened!</h1>
                        <p>Access the "My URL" page to view statics on your shortened links</p>
                    </div>

                    <div className="outputlink-container">
                        <input
                            type="text"
                            className="link-input"
                            value={shortLink}
                            readOnly
                            placeholder=" "
                        />
                        <button className="copy-button" onClick={handleCopy} title="Copy Link">
                            <span aria-hidden="true">Copy</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortenModal;