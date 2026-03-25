export const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 font-sans">
      <div className="relative flex flex-col overflow-hidden px-6 py-10 md:px-10 lg:flex-row lg:justify-between lg:px-[calc(160px-(1920px-100vw)/4)] lg:py-14">
        {/* Giới thiệu & Social */}
        <div className="mb-10 lg:mx-6 lg:w-[600px] z-10">
          <div className="mb-4 flex items-center">
            {/* Import logo */}
            <div className="relative size-12 md:size-14">
              <img
                src="/icons/fessior_navy.svg"
                alt="fessior-logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="ms-2 text-3xl font-bold text-primary-500">Fessior Community</h3>
          </div>
          <p className="mb-5 text-justify leading-7 text-neutral-700 md:me-5 lg:me-0">
            Fessior Community is a team of the Google Developer Student Club - Ho Chi Minh City
            University of Technology. Fessior's mission is to develop technology projects that bring
            practical values to the society and build a community of students who are passionate
            about technology.
          </p>

          {/* Social Links */}
          <div className="flex gap-2">
            <a
              href="https://facebook.com/dscxhcmut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-lg bg-primary-500 p-1.5 hover:bg-opacity-90 transition"
            >
              <img src="/icons/footer/facebook.svg" alt="facebook" className="h-full w-auto" />
            </a>

            <a
              href="https://furl.one/discord"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-lg bg-primary-500 p-1.5 hover:bg-opacity-90 transition"
            >
              <img src="/icons/footer/discord.svg" alt="discord" className="h-full w-auto" />
            </a>

            <a
              href="https://www.linkedin.com/company/gdschcmut/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-lg bg-primary-500 p-1.5 hover:bg-opacity-90 transition"
            >
              <img src="/icons/footer/linkedin.svg" alt="linkedin" className="h-full w-auto" />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="me-24 flex max-w-[500px] flex-col justify-between md:flex-row z-10">
          <div>
            <h4 className="mb-2 text-2xl font-bold text-primary-500">Contact Us</h4>
            <div className="h-1 w-16 rounded-full bg-primary-500 mb-6"></div>
            <ul className="space-y-4 text-left">
              <li>
                <a
                  href="mailto:admin@fessior.com"
                  className="flex items-center gap-3 text-neutral-700 hover:text-primary-500 transition-colors"
                >
                  <img src="/icons/footer/email.svg" alt="email" className="w-5 h-5" />
                  <span className="font-medium">admin@fessior.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0937501230"
                  className="flex items-center gap-3 text-neutral-700 hover:text-primary-500 transition-colors"
                >
                  <img src="/icons/footer/phonelink_ring.svg" alt="phone" className="w-5 h-5" />
                  <span className="font-medium">0937501230</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo chìm trang trí (Decorative Logo) */}
        <div className="absolute right-[-67px] top-[380px] size-[180px] md:right-[-80px] md:top-0 md:size-40 xl:right-[-126px] xl:top-0 xl:size-60 opacity-10 pointer-events-none">
          <img
            src="/icons/fessior_navy.svg"
            alt="decoration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="flex h-14 items-center justify-center bg-primary-500">
        <p className="text-xs text-white md:text-base font-medium">
          Fessior Tools - @2026 by Fessior Community
        </p>
      </div>
    </footer>
  )
}
