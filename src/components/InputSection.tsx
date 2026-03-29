interface InputSectionProps {
  onShorten: () => void
}
const InputSection = ({ onShorten }: InputSectionProps) => {
  return (
    <div className="w-full max-w-3xl p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-neutral-100">
      <div className="mb-4">
        <h2 className="text-brand-navy font-bold text-lg ">Your long URL</h2>
      </div>

      <div className="flex items-center gap-4 ">
        <div className="flex-1 relative flex items-center">
          <div className="absolute left-4">
            <img src="src/assets/url2.png" alt="icon" className="w-4 h-2 opacity-60" />
          </div>

          <input
            type="text"
            placeholder="Input the URL you want to shorten"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200  text-sm"
          />
        </div>

        <button
          className="bg-brand-navy text-white px-8 py-3 rounded-xl font-bold shadow-md"
          onClick={onShorten}
        >
          Shorten
        </button>
      </div>
    </div>
  )
}

export default InputSection
