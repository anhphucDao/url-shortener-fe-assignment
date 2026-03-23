import './ShortenForm.css';

const ShortenForm = () => {
  return (
    <div className="form-container">
      <h2>Your long URL</h2>
      <div className="form-input-wrapper">
        <input type="text" className="url-input" placeholder="Nhập URL tại đây..." />
        <button className="shorten-btn">Shorten</button>
      </div>
    </div>
  );
};

export default ShortenForm;