import ShortenerForm from './ShortenerForm'

interface MainContentProps {
  onShorten: (url: string) => void
}

export default function MainContent({ onShorten }: MainContentProps) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-10 mt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-500 mb-4">
          DevCamp URL Shortener
        </h1>
        <p className="text-xl text-primary-500">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>
      </div>

      <ShortenerForm onSubmit={onShorten} />
    </main>
  )
}
