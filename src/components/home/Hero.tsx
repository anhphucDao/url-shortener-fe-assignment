export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden text-primary-500 bg-white pt-32 pb-20 md:pt-44 lg:pt-40">
      {/* Nội dung chính cho z-10 để nằm trên cùng */}
      <div className="px-5 text-center z-10 relative">
        <h1 className="mb-5 text-5xl font-bold md:text-5xl lg:text-6xl">
          <span className="hidden md:inline">Fessior </span>URL Shortener
        </h1>
        <p className="mb-12 text-xl text-neutral-700 md:text-2xl lg:text-3xl max-w-3xl mx-auto">
          Simplify, Organize, and Share: <br className="md:hidden" /> URL Management Made Easy
        </p>
      </div>

      {/* Background Decorations */}
      <div className="absolute -right-2 top-28 z-0 size-10 rounded-full bg-primary-500 lg:top-32 opacity-80"></div>
      <div className="absolute left-10 top-36 z-0 size-10 rounded-full bg-primary-500 lg:left-28 opacity-60"></div>
    </section>
  )
}
