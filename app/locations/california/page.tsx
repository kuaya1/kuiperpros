import { Metadata } from 'next'
import StructuredData from '@/components/seo/StructuredData'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { MapPin, Clock, Shield, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Amazon Kuiper Installation California | Professional Satellite Internet Setup',
  description: 'Expert Kuiper satellite installation across California. Certified technicians, same-week service, 2-hour average install time. Serving all CA cities. Free quote in 60 seconds.',
  keywords: 'kuiper installation california, amazon kuiper california, kuiper satellite california, kuiper installer los angeles, kuiper san francisco, kuiper san diego, california satellite internet installation',
  openGraph: {
    title: 'Amazon Kuiper Installation California | Professional Setup',
    description: 'Professional Kuiper satellite installation throughout California. Expert technicians, fast service.',
    url: 'https://kuiperpros.com/locations/california',
  },
}

const californiaStats = {
  installationsCompleted: '425+',
  averageInstallTime: '1.8 hours',
  customerSatisfaction: '4.9/5',
  citiesServed: '50+'
}

const majorCities = [
  { name: 'Los Angeles', installations: '85+', averageTime: '2.1 hrs' },
  { name: 'San Francisco', installations: '62+', averageTime: '1.7 hrs' },
  { name: 'San Diego', installations: '54+', averageTime: '1.9 hrs' },
  { name: 'Sacramento', installations: '38+', averageTime: '1.6 hrs' },
  { name: 'San Jose', installations: '41+', averageTime: '1.8 hrs' },
  { name: 'Fresno', installations: '29+', averageTime: '1.5 hrs' },
  { name: 'Long Beach', installations: '31+', averageTime: '2.0 hrs' },
  { name: 'Oakland', installations: '27+', averageTime: '1.8 hrs' },
]

const localConsiderations = [
  {
    title: 'Coastal Weather Considerations',
    description: 'California coastal areas require specialized weatherproofing due to salt air exposure. Our technicians use marine-grade sealants and corrosion-resistant hardware.'
  },
  {
    title: 'Wildfire Season Planning',
    description: 'During wildfire season, we provide rapid reinstallation services and temporary ground mounts if roof installations are compromised.'
  },
  {
    title: 'Seismic Safety Compliance',
    description: 'All California installations meet seismic safety requirements with flexible mounting systems designed for earthquake zones.'
  },
  {
    title: 'Solar Panel Integration',
    description: 'Expert integration with existing solar panel systems, ensuring optimal placement for both energy generation and satellite connectivity.'
  }
]

const testimonials = [
  {
    name: 'Maria Rodriguez',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Excellent installation in our hillside home. The technician navigated the challenging roof angles perfectly and got us amazing speeds.'
  },
  {
    name: 'David Chen',
    location: 'San Francisco, CA', 
    rating: 5,
    text: 'Professional service from start to finish. They worked around our solar panels and completed installation in under 2 hours.'
  },
  {
    name: 'Jennifer Wilson',
    location: 'San Diego, CA',
    rating: 5,
    text: 'Great experience! The installer explained everything and made sure we understood how to optimize our Kuiper connection.'
  }
]

export default function CaliforniaInstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData 
        type="ProfessionalService"
        data={{
          name: 'KuiperPros California - Amazon Kuiper Installation',
          description: 'Professional Amazon Kuiper satellite internet installation services throughout California',
          areaServed: {
            '@type': 'State',
            name: 'California'
          }
        }}
      />
      
      <StructuredData 
        type="AggregateRating"
        data={{
          ratingValue: '4.9',
          reviewCount: '425'
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
                  <span className="text-brand-600"> in California</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Expert Kuiper satellite installation throughout the Golden State. 
                  From Los Angeles to San Francisco, our certified technicians deliver 
                  professional service with California-specific expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/quote">
                    <Button size="lg">Get Free California Quote</Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Local Technician
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{californiaStats.installationsCompleted}</div>
                    <div className="text-sm text-gray-600">CA Installations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{californiaStats.averageInstallTime}</div>
                    <div className="text-sm text-gray-600">Avg Install Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{californiaStats.customerSatisfaction}</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{californiaStats.citiesServed}</div>
                    <div className="text-sm text-gray-600">Cities Served</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Kuiper Installation in California"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-brand-100 rounded-full p-2">
                      <MapPin className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Statewide Coverage</p>
                      <p className="text-sm text-gray-600">All California Counties</p>
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
              Kuiper Installation in Major California Cities
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

        {/* California-Specific Considerations */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              California Installation Expertise
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
              What California Customers Say
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
            <h2 className="text-3xl font-bold mb-6">Ready for Kuiper Installation in California?</h2>
            <p className="text-xl mb-8 text-brand-100">
              Join hundreds of satisfied California customers. Professional installation with local expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg">
                  Get Free California Quote
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
