function Username() {
  return (
    <div className="flex items-center rounded-full border w-49.75 h-13 mr-10 mt-28 mb-28">
      <img src="/avatar.png" alt="Avatar" className="h-13 w-13 " />

      <div className="flex flex-col ml-3">
        <div className=" text-xs font-regular text-neutral-600 ">Personal</div>
        <div className="font-baloo text-xl font-medium text-neutral-600 "> Username</div>
      </div>
    </div>
  )
}

export default Username
