function UserProfile() {
  return (
    <div className="w-[199px] h-[52px] items-center flex border border-primary-500 border-l-0 rounded-full gap-[12px]">
      <img src="/images/user.svg" className="w-[52px] h-[52px]" />
      <div className="w-[199px] h-[52px] py-[4px] justify-center flex flex-col">
        <h3 className="text-xs text-gray-500">Personal</h3>
        <h2 className="text-xl text-gray-500 font-semibold">Username</h2>
      </div>
    </div>
  )
}
export default UserProfile
