function URLInput({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  return (
    <div className="w-[608px] h-[42px] flex border border-gray-300 rounded-lg relative">
      <img
        src="public/images/icon.svg"
        className="w-[20px] h-[20px] absolute top-1/2 -translate-y-1/2 left-[8px]"
      />
      <div className="w-0 h-[26px] absolute top-1/2 -translate-y-1/2 left-[36px] border border-gray-300"></div>

      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Input the URL you want to shorten"
        className="w-[608px] h-[42px] px-[48px] absolute top-0 left-0 placeholder:text-primary-300 text-primary-500 text-xs font-semibold placeholder:font-normal focus:outline-primary-500 rounded-lg"
      ></input>
    </div>
  )
}
export default URLInput
