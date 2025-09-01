import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/homepage/HeroSection'
import HowItWorks from '@/components/homepage/HowItWorks'
import ServicesOverview from '@/components/homepage/ServicesOverview'
import ServiceMap from '@/components/homepage/ServiceMap'
import Testimonials from '@/components/homepage/Testimonials'
import FAQ from '@/components/homepage/FAQ'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorks />
        <ServicesOverview />
        <ServiceMap />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
