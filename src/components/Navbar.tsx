const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <div>
        <img src="src/assets/devcamp_logo_navy.png" alt="Logo" className="h-15" />
      </div>

      <div>
        <div className="flex items-center  gap-4 pr-10 rounded-full border border-primary-500">
          <div className="rounded-full">
            <img src="src/assets/Vector.png" alt="Icon" className="w-full h-full" />
          </div>

          <div>
            <p className="text-xs text-neutral-600 ">Personal</p>
            <h3 className="text-sm font-bold text-neutral-600 ">Username</h3>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
