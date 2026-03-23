export default function Header() {
  return (
    <>
      <div className="fixed grid grid-cols-2 w-full lg:h-[11vh] sm:h-[8vh] h-[5vh] bg-white items-stretch">
        <a
          className="lg:h-[11vh] sm:h-[8vh] h-[5vh] aspect-square hover:cursor-pointer"
          href="https://fessior.com/dev-camp/2026"
          target="_blank"
        >
          <img className="h-full ml-3" src="/Logo_DemCamp2026.png" alt="demo" />
        </a>
        <div className="flex lg:h-[11vh] sm:h-[8vh] h-[5vh] w-[50%] border border-primary-500 justify-self-end mr-4 rounded-full">
          <img
            className="h-full aspect-ratio-square rounded-fuil self-center"
            src="/default-avatar.png"
          />
          <div className="text-[rgb(91,91,91)] ml-4">
            <div className="lg:text-[15px] sm:text-[14px] text-[8px]">Personal</div>
            <div className="lg:text-[25px] sm:text-[20px] text-[12px]">Username</div>
          </div>
        </div>
      </div>
    </>
  )
}
