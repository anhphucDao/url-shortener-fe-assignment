export const ShortenerForm = () => {
  return (
    <div className="relative mx-auto mb-44 max-w-4xl">
      {/* Họa tiết góc trên trái */}
      <div className="absolute -left-4 -top-4 z-10 h-10 w-32 rounded-lg bg-primary-500"></div>

      {/* Card chính - z-20 để đè lên họa tiết */}
      <div className="relative z-20 rounded-xl border border-[#7e7e7e4d] bg-white p-6 shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
        <div className="md:flex items-start">
          <div className="grow">
            <h6 className="mb-2 text-lg font-medium text-neutral-900 md:text-xl lg:text-2xl">
              long URL
            </h6>

            {/* Input URL */}
            <div className="relative flex h-11 w-full items-center overflow-hidden rounded-lg border border-[#7e7e7e4d] focus-within:border-primary-500">
              <div className="flex items-center px-3">
                <img src="/icons/shorten/link.svg" alt="link" className="w-5 h-5" />
                <div className="mx-2 h-6 w-[1px] bg-[#7e7e7e4d]"></div>
              </div>
              <input
                type="text"
                placeholder="Input the URL you want to shorten"
                className="h-full grow py-2 outline-none placeholder:text-neutral-400 ps-1 text-sm md:text-base"
              />
            </div>

            {/* Domain + Slug Grid */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex items-center justify-between md:justify-start gap-4">
                <p className="font-medium text-black md:w-24">Domain</p>
                <div className="relative flex-1 md:flex-none md:w-48">
                  <select className="h-11 w-full rounded-lg border border-[#7e7e7e4d] px-3 py-2 outline-none focus:border-primary-500 appearance-none bg-transparent">
                    <option>furl.one</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-start gap-4">
                <p className="font-medium text-black md:w-24">Slug</p>
                <div className="relative flex-1 md:grow h-11 flex items-center rounded-lg border border-[#7e7e7e4d] focus-within:border-primary-500">
                  <div className="flex items-center px-3">
                    <img src="/icons/shorten/slug.svg" alt="slug" className="w-5 h-5" />
                    <div className="mx-2 h-6 w-[1px] bg-[#7e7e7e4d]"></div>
                  </div>
                  <input placeholder="/slug" className="h-full grow outline-none bg-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Nút Shorten */}
          <button className="mt-8 md:mt-10 md:ms-4 h-11 w-full md:w-32 rounded-lg bg-secondary-100 font-bold text-primary-500 hover:bg-secondary-300 transition-all active:scale-95 text-base lg:text-lg">
            Shorten
          </button>
        </div>
      </div>

      {/* Họa tiết góc dưới phải */}
      <div className="absolute -right-4 -bottom-4 z-10 h-10 w-32 rounded-lg bg-primary-500"></div>
    </div>
  )
}
