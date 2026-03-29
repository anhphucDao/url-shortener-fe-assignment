import { DropSelector } from '../../components/ui/dropSelector.tsx'
import { InputContainer } from '../../components/ui/inputContainer.tsx'
import { ShortenButton } from '../../components/ui/shortenButton.tsx'
import linkIcon from '../../static/link.svg'
import slugIcon from '../../static/slug.png'

export default function App() {
  return (
    <main className="font-sans min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-neutral-50">
      <div className="text-center">
        <h1 className="mb-5 text-5xl font-bold text-primary-500 md:text-3xl lg:text-6xl">
          URL Shortener
        </h1>
        <h3 className="text-3xl text-primary-500 md:text-1xl lg:text-3xl">
          Simplify, Organize, and Share: URL Management Made Easy
        </h3>
      </div>
      <div className="mt-12 flex flex-col w-full max-w-3xl bg-shade-white p-5 rounded-xl shadow-2xl z-10 ring-1 ring-neutral-200 focus-within:ring-2 transition-shadow">
        <div className="mb-10 flex flex-col w-full gap-y-7">
          <h3 className="text-lg font-medium text-primary-500 md:text-xl lg:text-2xl">
            Your Long URL
          </h3>
          <div className="flex flex-row gap-5">
            <InputContainer text={'Enter your link here...'} img_src={linkIcon} />
            <ShortenButton />
          </div>
          <div className="flex gap-x-10">
            <h2 className="text-lg font-medium md:text-l lg:text-xl">Domain</h2>
            <DropSelector />
          </div>
        </div>
        <div className="mb-7 flex gap-x-10 items-center">
          <h2 className="text-lg font-medium text-primary-500 md:text-xl lg:text-2xl">Slug</h2>
          <InputContainer text={'/slug'} img_src={slugIcon} />
        </div>
      </div>
    </main>
  )
}
