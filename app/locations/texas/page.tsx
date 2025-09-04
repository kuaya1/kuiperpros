import { Metadata } from 'next'
import StructuredData from '@/components/seo/StructuredData'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { MapPin, Clock, Shield, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Amazon Kuiper Installation Texas | Professional Satellite Internet Setup',
  description: 'Expert Kuiper satellite installation across Texas. Certified technicians, same-week service, 2-hour average install time. Serving Dallas, Houston, Austin, San Antonio. Free quote.',
  keywords: 'kuiper installation texas, amazon kuiper texas, kuiper satellite texas, kuiper installer dallas, kuiper houston, kuiper austin, texas satellite internet installation',
  openGraph: {
    title: 'Amazon Kuiper Installation Texas | Professional Setup',
    description: 'Professional Kuiper satellite installation throughout Texas. Expert technicians, fast service.',
    url: 'https://kuiperpros.com/locations/texas',
  },
}

const texasStats = {
  installationsCompleted: '380+',
  averageInstallTime: '1.9 hours',
  customerSatisfaction: '4.8/5',
  citiesServed: '45+'
}

const majorCities = [
  { name: 'Houston', installations: '78+', averageTime: '2.0 hrs' },
  { name: 'Dallas', installations: '72+', averageTime: '1.9 hrs' },
  { name: 'Austin', installations: '65+', averageTime: '1.8 hrs' },
  { name: 'San Antonio', installations: '58+', averageTime: '1.7 hrs' },
  { name: 'Fort Worth', installations: '43+', averageTime: '1.9 hrs' },
  { name: 'El Paso', installations: '32+', averageTime: '1.6 hrs' },
  { name: 'Arlington', installations: '28+', averageTime: '2.1 hrs' },
  { name: 'Plano', installations: '24+', averageTime: '1.8 hrs' },
]

const localConsiderations = [
  {
    title: 'Severe Weather Resilience',
    description: 'Texas installations include reinforced mounting systems designed for high winds, hail storms, and severe thunderstorms common across the state.'
  },
  {
    title: 'Heat Resistance Solutions',
    description: 'Our Texas installations use heat-resistant hardware and enhanced ventilation solutions to handle extreme summer temperatures exceeding 100°F.'
  },
  {
    title: 'Large Property Expertise',
    description: 'Specialized experience with ranch properties, large estates, and commercial installations requiring extended cable runs and multiple access points.'
  },
  {
    title: 'Oil Field Compatibility',
    description: 'Expert installation services for oil and gas industry locations with specialized safety protocols and industrial-grade mounting solutions.'
  }
]

const testimonials = [
  {
    name: 'Robert Johnson',
    location: 'Dallas, TX',
    rating: 5,
    text: 'Outstanding installation on our ranch property. The team handled the 200-foot cable run perfectly and secured everything for Texas weather.'
  },
  {
    name: 'Sarah Martinez',
    location: 'Houston, TX', 
    rating: 5,
    text: 'Professional installation despite the challenging Houston humidity. They used marine-grade weatherproofing and it\'s performed flawlessly.'
  },
  {
    name: 'Michael Thompson',
    location: 'Austin, TX',
    rating: 5,
    text: 'Quick and efficient installation. The technician explained how the system would handle our Texas heat and storms. Very knowledgeable.'
  }
]

export default function TexasInstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData 
        type="ProfessionalService"
        data={{
          name: 'KuiperPros Texas - Amazon Kuiper Installation',
          description: 'Professional Amazon Kuiper satellite internet installation services throughout Texas',
          areaServed: {
            '@type': 'State',
            name: 'Texas'
          }
        }}
      />
      
      <StructuredData 
        type="AggregateRating"
        data={{
          ratingValue: '4.8',
          reviewCount: '380'
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
                  <span className="text-brand-600"> in Texas</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Expert Kuiper satellite installation throughout the Lone Star State. 
                  From Dallas to Houston, our certified technicians deliver 
                  professional service built for Texas-sized properties and weather.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/quote">
                    <Button size="lg">Get Free Texas Quote</Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Local Technician
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{texasStats.installationsCompleted}</div>
                    <div className="text-sm text-gray-600">TX Installations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{texasStats.averageInstallTime}</div>
                    <div className="text-sm text-gray-600">Avg Install Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{texasStats.customerSatisfaction}</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-600">{texasStats.citiesServed}</div>
                    <div className="text-sm text-gray-600">Cities Served</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Kuiper Installation in Texas"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-brand-100 rounded-full p-2">
                      <MapPin className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Statewide Coverage</p>
                      <p className="text-sm text-gray-600">All Texas Counties</p>
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
              Kuiper Installation in Major Texas Cities
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

        {/* Texas-Specific Considerations */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Texas Installation Expertise
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
              What Texas Customers Say
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
            <h2 className="text-3xl font-bold mb-6">Ready for Kuiper Installation in Texas?</h2>
            <p className="text-xl mb-8 text-brand-100">
              Join hundreds of satisfied Texas customers. Professional installation with local expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg">
                  Get Free Texas Quote
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
