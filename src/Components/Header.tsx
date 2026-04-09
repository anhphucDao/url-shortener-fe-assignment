export default function Header() {
  return (
    <>
      <div className="fixed grid grid-cols-2 items-center w-full h-[11%] bg-white">
        <a
          className="h-[11vh] aspect-square hover:cursor-pointer"
          href="https://fessior.com/dev-camp/2026"
          target="_blank"
        >
          <img className="h-full ml-3" src="/Logo_DevCamp2026.png" alt="demo" />
        </a>
        <div className="flex lg:h-[8vh] h-[6vh] w-[30%]  min-w-40 border border-primary-500 bg-white justify-self-end mr-4 rounded-full">
          <img
            className="h-full aspect-ratio-square rounded-fuil self-center"
            src="/default-avatar.png"
          />
          <div className="text-primary-500 ml-4">
            <div className="lg:text-[15px] text-[10px]">Personal</div>
            <div className="lg:text-[20px] text-[14px]">Username</div>
          </div>
        </div>
      </div>
    </>
  )
}
