function Header() {
  return (
    <>
      <div className="fixed top-0">
        <img
          src="../public/logo.svg"
          className="fixed w-13 md:w-fit z-10 left-4 md:left-10 top-4"
        />
        <div className="fixed top-4 right-4 md:right-10 border rounded-4xl min-w-35 flex gap-2 md:min-w-40 items-start text-start">
          <img src="../public/avatar.svg" className="w-10" />
          <div className="text-gray-700">
            <p className="text-[10px]">Personal</p>
            <p className="text-4">Username</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
