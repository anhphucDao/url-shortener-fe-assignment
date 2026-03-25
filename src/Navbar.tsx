import logo from './image/fessior_navy.svg'
import user from './image/Vector.png'

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 px-4 py-5 flex justify-between items-center">
      <div className="flex flex-row items-center text-xl md:text-2xl lg:text-3xl text-primary">
        {/* Left-col */}
        <div>
          <img className="size-20 h-9 w-auto me-1 md:me-2 lg:h-10" src={logo} alt="logo" />
        </div>
        <div className="--font-sans text-xl font-semibold text-(--color-primary-500)">
          Fessior Devcamp
        </div>
      </div>

      <div className="border border-primary relative flex w-42.5 items-center rounded-full hover:cursor-pointer me-3 ms-5">
        {/* Right-col */}
        <div className="flex w-full items-center pe-3">
          <img className="size-12 rounded-full" src={user} alt="" />
          <div className="my-0.5 ms-3 flex flex-col justify-between">
            <p className="text-xs">Personal</p>
            <p className="-mb-1 truncate text-xl font-medium md:text-base">Username</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
