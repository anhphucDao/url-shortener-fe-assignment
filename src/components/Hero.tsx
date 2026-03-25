interface HeroProps {
  onShorten: () => void;
}

const Hero = ({ onShorten }: HeroProps) => {
    return (
    <section className="flex flex-col items-center px-4 py-16 w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B2878] text-center mb-4">
        Devcamp URL Shortener
      </h1>
      
      <p className="text-2xl text-[#0B2878] opacity-80 text-center mb-10 max-w-2xl">
        Simplify, Organize, and Share: URL Management Made Easy
      </p>

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <label className="block text-[#0B2878] font-bold mb-4 ml-1 text-xl">
          Your long URL
        </label>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.25008 9.99998C3.25008 8.57498 4.40841 7.41665 5.83341 7.41665H9.16675V5.83331H5.83341C3.53341 5.83331 1.66675 7.69998 1.66675 9.99998C1.66675 12.3 3.53341 14.1666 5.83341 14.1666H9.16675V12.5833H5.83341C4.40841 12.5833 3.25008 11.425 3.25008 9.99998ZM6.66675 10.8333H13.3334V9.16665H6.66675V10.8333ZM14.1667 5.83331H10.8334V7.41665H14.1667C15.5917 7.41665 16.7501 8.57498 16.7501 9.99998C16.7501 11.425 15.5917 12.5833 14.1667 12.5833H10.8334V14.1666H14.1667C16.4667 14.1666 18.3334 12.3 18.3334 9.99998C18.3334 7.69998 16.4667 5.83331 14.1667 5.83331Z" fill="#0B2878" fill-opacity="0.87"/>
                </svg>
            </div>
            <input
              type="text"
              placeholder="Input the URL you want to shorten"
              className="placeholder:text-primary-300 w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2878] focus:bg-white transition-all"
            />
          </div>
          
          <button 
          onClick={onShorten}
          className="bg-[#0B2878] text-white font-medium py-4 px-10 rounded-xl hover:bg-[#081d58] transition-colors shadow-lg active:scale-95">
            Shorten
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;