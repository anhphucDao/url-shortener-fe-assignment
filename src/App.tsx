import { Header } from './components/layout/Header'
import { Hero } from './components/home/Hero'
import { ShortenerForm } from './components/home/ShortenerForm'
import { FeatureCard } from './components/home/FeatureCard'
import { Footer } from './components/layout/Footer'
import { FEATURES } from './constants/features.ts'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-neutral-900">
      <Header />

      <main className="flex-grow pt-20">
        {/* Main Hero & Input section */}
        <Hero />

        <div className="container mx-auto px-5">
          <ShortenerForm />
        </div>

        {/* Features grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-5 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">Fessior Tools</h2>
            <p className="text-neutral-700 max-w-2xl mx-auto mb-16 text-lg">
              Your one-stop destination for essential utilities. Discover a world of
              community-driven tools that simplify your daily tasks.
            </p>

            {/* Service cards mapping */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {FEATURES.map((item, idx) => (
                <FeatureCard
                  key={idx}
                  title={item.title}
                  description={item.desc}
                  iconSrc={item.icon}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
