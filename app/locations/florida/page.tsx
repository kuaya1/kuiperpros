import { Metadata } from 'next'
import StructuredData from '@/components/seo/StructuredData'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { MapPin, Clock, Shield, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Amazon Kuiper Installation Florida | Professional Satellite Internet Setup',
  description: 'Expert Kuiper satellite installation across Florida. Certified technicians, same-week service, 2-hour average install time. Serving Miami, Tampa, Orlando, Jacksonville. Free quote.',
  keywords: 'kuiper installation florida, amazon kuiper florida, kuiper satellite florida, kuiper installer miami, kuiper tampa, kuiper orlando, florida satellite internet installation',
  openGraph: {
    title: 'Amazon Kuiper Installation Florida | Professional Setup',
    description: 'Professional Kuiper satellite installation throughout Florida. Expert technicians, fast service.',
    url: 'https://kuiperpros.com/locations/florida',
  },
}

const floridaStats = {
  installationsCompleted: '310+',
  averageInstallTime: '1.7 hours',
  customerSatisfaction: '4.9/5',
  citiesServed: '35+'
}

const majorCities = [
  { name: 'Miami', installations: '65+', averageTime: '1.8 hrs' },
  { name: 'Tampa', installations: '58+', averageTime: '1.6 hrs' },
  { name: 'Orlando', installations: '52+', averageTime: '1.7 hrs' },
  { name: 'Jacksonville', installations: '45+', averageTime: '1.8 hrs' },
  { name: 'Fort Lauderdale', installations: '38+', averageTime: '1.6 hrs' },
  { name: 'St. Petersburg', installations: '31+', averageTime: '1.7 hrs' },
  { name: 'Tallahassee', installations: '28+', averageTime: '1.5 hrs' },
  { name: 'Fort Myers', installations: '25+', averageTime: '1.8 hrs' },
]

const localConsiderations = [
  {
    title: 'Hurricane-Resistant Installations',
    description: 'All Florida installations use hurricane-rated mounting systems designed to withstand Category 3+ winds. Special reinforcement protocols for coastal properties.'
  },
  {
    title: 'Saltwater Corrosion Protection',
    description: 'Coastal Florida installations include marine-grade hardware and enhanced corrosion protection to handle saltwater exposure and humidity.'
  },
  {
    title: 'Lightning Protection Systems',
    description: 'Given Florida\'s high lightning activity, all installations include proper grounding and surge protection systems as standard equipment.'
  },
  {
    title: 'Tropical Weather Optimization',
    description: 'Installations optimized for Florida\'s tropical climate with enhanced weatherproofing for heavy rain and humidity conditions.'
  }
]

const testimonials = [
  {
    name: 'Carlos Rodriguez',
    location: 'Miami, FL',
    rating: 5,
    text: 'Excellent hurricane-resistant installation. The team used marine-grade materials perfect for our coastal location. No issues after Hurricane season.'
  },
  {
    name: 'Amanda Thompson',
    location: 'Tampa, FL', 
    rating: 5,
    text: 'Professional installation with proper lightning protection. They explained all the Florida-specific precautions they took. Very thorough.'
  },
  {
    name: 'James Wilson',
    location: 'Orlando, FL',
    rating: 5,
    text: 'Quick installation despite the afternoon thunderstorm. The technician waited it out and completed everything perfectly. Great service.'
  }
]

export default function FloridaInstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData 
        type="ProfessionalService"
        data={{
          name: 'KuiperPros Florida - Amazon Kuiper Installation',
          description: 'Professional Amazon Kuiper satellite internet installation services throughout Florida',
          areaServed: {
            '@type': 'State',
            name: 'Florida'
          }
        }}
      />
      
      <StructuredData 
        type="AggregateRating"
        data={{
          ratingValue: '4.9',
          reviewCount: '310'
        }}
      />

      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-50 to-white py-16">
          <div className="container max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Amazon Kuiper Installation
                  <span className="text-brand-600"> in Florida</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Expert Kuiper satellite installation throughout the Sunshine State. 
                  From Miami to Jacksonville, our certified technicians deliver 
                  hurricane-resistant installations built for Florida weather.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/quote">
                    <Button size="lg">Get Free Florida Quote</Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Local Technician
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{floridaStats.installationsCompleted}</div>
                    <div className="text-sm text-gray-600">FL Installations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{floridaStats.averageInstallTime}</div>
                    <div className="text-sm text-gray-600">Avg Install Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{floridaStats.customerSatisfaction}</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{floridaStats.citiesServed}</div>
                    <div className="text-sm text-gray-600">Cities Served</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Kuiper Installation in Florida"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-brand-100 rounded-full p-2">
                      <Shield className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Hurricane Rated</p>
                      <p className="text-sm text-gray-600">Category 3+ Resistant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Cities Coverage */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Kuiper Installation in Major Florida Cities
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {majorCities.map((city, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">{city.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Installations:</span>
                      <span className="font-medium">{city.installations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Time:</span>
                      <span className="font-medium">{city.averageTime}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    Get {city.name} Quote
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Florida-Specific Considerations */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Florida Installation Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {localConsiderations.map((consideration, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{consideration.title}</h3>
                  <p className="text-gray-600">{consideration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Florida Customers Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-brand-600 text-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Kuiper Installation in Florida?</h2>
            <p className="text-xl mb-8 text-brand-100">
              Join hundreds of satisfied Florida customers. Hurricane-resistant installation with local expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg">
                  Get Free Florida Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Meet Local Technicians
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
