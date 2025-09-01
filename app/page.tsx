import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/homepage/HeroSection'
import HowItWorks from '@/components/homepage/HowItWorks'
import ServicesOverview from '@/components/homepage/ServicesOverview'
import ServiceMap from '@/components/homepage/ServiceMap'
import Testimonials from '@/components/homepage/Testimonials'
import FAQ from '@/components/homepage/FAQ'
import StructuredData from '@/components/seo/StructuredData'
import InlineNewsletter from '@/components/lead-capture/InlineNewsletter'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData 
        type="LocalBusiness"
        data={{
          name: 'KuiperPros',
          description: 'Professional Amazon Kuiper satellite internet installation services across the United States',
          url: 'https://kuiperpros.com',
          telephone: '+1-800-KUIPER-1',
          priceRange: '$100-$500',
          serviceType: 'Satellite Internet Installation',
        }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorks />
        <ServicesOverview />
        
        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <InlineNewsletter 
              title="Get Notified When Kuiper Launches in Your Area"
              description="Join thousands of people waiting for Amazon Kuiper internet service. Be the first to know when it's available and get exclusive early bird pricing."
              source="homepage_inline"
            />
          </div>
        </section>
        
        <ServiceMap />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
