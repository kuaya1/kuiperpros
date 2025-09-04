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
        type="ProfessionalService"
        data={{
          name: 'KuiperPros - Amazon Kuiper Installation Service',
          description: 'Professional Amazon Kuiper satellite internet installation and setup services across the United States',
        }}
      />
      <StructuredData 
        type="HowTo"
        data={{
          name: 'Professional Amazon Kuiper Installation Process',
          description: 'Complete step-by-step guide for professional Kuiper satellite installation by certified technicians',
        }}
      />
      <StructuredData 
        type="AggregateRating"
        data={{
          ratingValue: '4.8',
          reviewCount: '247'
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
