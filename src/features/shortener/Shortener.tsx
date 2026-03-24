const Shortener = () => {
  return (
    <div className="container">
      <h1>Devcamp URL Shortener</h1>
      <p>
        Simplify,Orgnaize,and Share:URL Management Made Easy 
      </p>

      <div className="card">
        <h1>Your long URL</h1>
        <input placeholder="Input the URL you want to shorten" />
        <button>Shorten</button>
      </div>
    </div>
  );
};

export default Shortener;