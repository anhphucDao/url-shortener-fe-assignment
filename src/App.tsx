// src/App.tsx (hoặc src/layouts/HomeLayout.tsx)
import { Header } from './components/layout/Header'
import { Hero } from './components/home/Hero'
import { ShortenerForm } from './components/home/ShortenerForm'
import { FeatureCard } from './components/home/FeatureCard'
import { Footer } from './components/layout/Footer'

// 1. Mảng dữ liệu chứa 6 dịch vụ
const featuresData = [
  {
    title: 'URL Shortener',
    description: 'Link shortening service with free-of-charge advanced management features.',
    icon: '/icons/home/active/shortener.svg',
  },
  {
    title: 'QR Generator',
    description: 'Customize, brand, and share information. Craft QR codes for your unique needs.',
    icon: '/icons/home/active/qr.svg',
  },
  {
    title: 'Fessior Connect',
    description: '🎓 HCMUTers Only! Find study partners, project teammates, and activity buddies.',
    icon: '/icons/home/active/codewithme.svg',
  },
  {
    title: 'GDSC Certificate',
    description:
      'Easily create, edit, export, and share certificates on our user-friendly platform.',
    icon: '/icons/home/active/cert.svg',
  },
  {
    title: 'GDSC Calendar',
    description: 'Effortlessly manage your calendar, create schedules, and oversee daily events.',
    icon: '/icons/home/active/calendar.svg',
  },
  {
    title: 'GDSC Q&A',
    description: 'Get answers and career advice from tech-savvy consultants or school experts.',
    icon: '/icons/home/active/qna.svg',
  },
]

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow pt-20">
        <Hero />

        <div className="container mx-auto px-5">
          <ShortenerForm />
        </div>

        {/* === SECTION DỊCH VỤ (FEATURE CARDS) === */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-5">
            {/* Tiêu đề Section */}
            <h2 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4 font-sans">
              Fessior Tools
            </h2>
            <p className="text-neutral-700 max-w-2xl mx-auto mb-16 text-lg">
              Your one-stop destination for essential utilities. Discover a world of
              community-driven tools that simplify your daily tasks.
            </p>

            {/* 2. Grid Container: Tự động chia cột theo màn hình */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {/* 3. Vòng lặp Map để render 6 cái card */}
              {featuresData.map((feature, index) => (
                <FeatureCard
                  key={index} // Cần Key khi lặp trong React
                  title={feature.title}
                  description={feature.description}
                  iconSrc={feature.icon}
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
