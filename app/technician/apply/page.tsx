import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import TechnicianSignup from '@/components/lead-capture/TechnicianSignup'
import StructuredData from '@/components/seo/StructuredData'
import { Shield, Users, TrendingUp, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Become a Kuiper Installation Technician | KuiperPros',
  description: 'Join our certified technician network and earn $150-$400 per Kuiper installation. Professional training, flexible schedule, and ongoing support provided.',
  keywords: 'Kuiper technician, satellite installation jobs, technician network, earn money, flexible work',
}

export default function TechnicianApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData 
        type="Service"
        data={{
          name: 'Technician Partnership Program',
          description: 'Join our certified network of Kuiper satellite installation technicians',
          provider: {
            '@type': 'Organization',
            name: 'KuiperPros',
          },
          serviceType: 'Professional Training and Certification',
        }}
      />
      
      <Navigation />
      
      <main className="py-16">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Build Your Business with Kuiper
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our elite network of certified technicians and capitalize on the 
              satellite internet revolution. Professional training, premium pay, and 
              unlimited growth potential.
            </p>
          </div>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Why Partner with KuiperPros?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-lg p-2 flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Premium Compensation
                      </h3>
                      <p className="text-gray-600">
                        Earn $150-$400 per installation with performance bonuses. 
                        Top technicians make $100,000+ annually.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Complete Training & Certification
                      </h3>
                      <p className="text-gray-600">
                        Comprehensive training program covering Kuiper technology, 
                        safety protocols, and customer service excellence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Flexible Schedule
                      </h3>
                      <p className="text-gray-600">
                        Choose your own hours and service area. Work full-time 
                        or part-time based on your availability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-lg p-2 flex-shrink-0">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Ongoing Support
                      </h3>
                      <p className="text-gray-600">
                        24/7 technical support, dedicated field coordinators, 
                        and continuous education opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Earnings Potential
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Standard Installation</span>
                    <span className="text-lg font-bold text-green-600">$150-$200</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Complex Installation</span>
                    <span className="text-lg font-bold text-green-600">$250-$350</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Commercial Setup</span>
                    <span className="text-lg font-bold text-green-600">$400-$600</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-brand-50 rounded-lg border-2 border-brand-200">
                    <span className="font-medium text-brand-700">Monthly Bonus (Top 10%)</span>
                    <span className="text-lg font-bold text-brand-600">+$1,000</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
                  <p className="text-sm text-green-800">
                    <strong>Average monthly earnings:</strong> $3,500 - $8,500 
                    based on 20-40 installations per month
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Minimum Requirements
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                  <p className="text-sm text-gray-600">
                    2+ years in telecommunications, electrical, or satellite installation
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Background Check</h3>
                  <p className="text-sm text-gray-600">
                    Clean background check and drug screening required
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional</h3>
                  <p className="text-sm text-gray-600">
                    Professional appearance, reliable transportation, and tools
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Application Form */}
          <section>
            <TechnicianSignup />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
