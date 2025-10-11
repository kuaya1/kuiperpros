import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/homepage/HeroSection'
import KuiperEducationAccordion from '@/components/homepage/KuiperEducationAccordion'
import TrustHub from '@/components/homepage/TrustHub'
import LaunchCountdown from '@/components/homepage/LaunchCountdown'
import LaunchRoadmap from '@/components/homepage/LaunchRoadmap'
import LaunchStatusTracker from '@/components/homepage/LaunchStatusTracker'
import EarlyAdopterBenefits from '@/components/homepage/EarlyAdopterBenefits'
import HowItWorks from '@/components/homepage/HowItWorks'
import ServicesOverview from '@/components/homepage/ServicesOverview'
import ServiceMap from '@/components/homepage/ServiceMap'
import Testimonials from '@/components/homepage/Testimonials'
import FAQ from '@/components/homepage/FAQ'
import StructuredData from '@/components/seo/StructuredData'
import InlineNewsletter from '@/components/lead-capture/InlineNewsletter'
import CoverageChecker from '@/components/homepage/CoverageChecker'
import TechnologyShowcase from '@/components/homepage/TechnologyShowcase'
import VideoTestimonials from '@/components/homepage/VideoTestimonials'
import TechnicianProfiles from '@/components/homepage/TechnicianProfiles'
import MobileStickyCTA from '@/components/lead-capture/MobileStickyCTA'
import ExitIntentPopup from '@/components/lead-capture/ExitIntentPopup'
import KuiperWaitlist from '@/components/homepage/KuiperWaitlist'

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
      <main id="main-content">
        <HeroSection />
        
        {/* Launch Countdown - Immediate urgency display */}
        <section className="py-12 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LaunchCountdown variant="full" showCTA={true} />
          </div>
        </section>
        
        {/* Educational Accordion - Section #2 for front-loaded learning */}
        <KuiperEducationAccordion />
        
        {/* Trust Hub - Section #3 for credibility before conversion */}
        <TrustHub />
        
        {/* Early Adopter Benefits - Section #4 for urgency and tiered access */}
        <EarlyAdopterBenefits />
        
        {/* Launch Roadmap - Visual timeline */}
        <LaunchRoadmap />
        
        <HowItWorks />
        <TechnologyShowcase />
        <ServicesOverview />
        
        {/* Coverage Checker */}
        <section id="coverage-checker">
          <CoverageChecker />
        </section>
        
        <TechnicianProfiles />
        
        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-50" id="newsletter">
          <div className="container">
            <InlineNewsletter 
              title="Get Notified When Kuiper Launches in Your Area"
              description="Join thousands of people waiting for Amazon Kuiper internet service. Be the first to know when it's available and get exclusive early bird pricing."
              source="homepage_inline"
            />
          </div>
        </section>
        
        <ServiceMap />
        <VideoTestimonials />
        <Testimonials />
        <KuiperWaitlist />
        
        {/* FAQ Section with ID */}
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
      
      {/* Interactive Features */}
      <MobileStickyCTA />
      <ExitIntentPopup />
    </div>
  )
}
