export default function Header() {
  return (
    <>
      <div className="fixed grid grid-cols-2 w-full h-[11vh] bg-white items-stretch">
        <a
          className="h-[11vh] aspect-square hover:cursor-pointer"
          href="https://fessior.com/dev-camp/2026"
          target="_blank"
        >
          <img className="h-[11vh] ml-3" src="/Logo_DemCamp2026.png" alt="demo" />
        </a>
        <div className="flex h-13 w-50 border border-primary-500 justify-self-end mr-4 my-2 rounded-full">
          <img className="h-13 w-13 rounded-fuil self-center" src="/default-avatar.png" />
          <div className="text-[rgb(91,91,91)] ml-4">
            <div className="text-[12px]">Personal</div>
            <div className="text-[20px]">Username</div>
          </div>
        </div>
      </div>
    </>
  )
}
