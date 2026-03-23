export const Button = ({ onClick }) => {
  return (
    <button
      className="bg-primary-500 text-white font-semibold text-[16px] py-2 px-5 rounded-lg hover:bg-primary-300 transition-all duration-100 cursor-pointer shadow-md"
      onClick={onClick}
    >
      Shorten
    </button>
  )
}
