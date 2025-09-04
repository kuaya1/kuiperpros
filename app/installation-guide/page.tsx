import { Metadata } from 'next'
import StructuredData from '@/components/seo/StructuredData'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { CheckCircle, Clock, Shield, AlertTriangle, Download, Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Complete Amazon Kuiper Installation Guide 2025 | Professional Setup Process',
  description: 'Comprehensive guide to Amazon Kuiper satellite installation. Learn about the professional setup process, equipment requirements, installation time, and costs. 2-hour average install time.',
  keywords: 'kuiper installation guide, amazon kuiper setup, kuiper dish installation, kuiper professional installation, kuiper vs starlink installation, kuiper installation requirements, kuiper satellite mounting',
  openGraph: {
    title: 'Complete Amazon Kuiper Installation Guide 2025',
    description: 'Everything you need to know about professional Kuiper satellite installation. Step-by-step process, costs, and requirements.',
    url: 'https://kuiperpros.com/installation-guide',
    images: [
      {
        url: 'https://kuiperpros.com/images/kuiper-installation-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Amazon Kuiper Installation Guide',
      },
    ],
  },
}

export default function InstallationGuidePage() {
  const installationSteps = [
    {
      title: "Site Survey and Assessment",
      duration: "15-30 minutes",
      description: "Our certified technician performs a comprehensive site evaluation to ensure optimal Kuiper performance.",
      details: [
        "Clear southern sky view verification (minimum 100-degree arc)",
        "Structural assessment of mounting locations",
        "Distance measurement from dish to router location",
        "Local weather and environmental factor evaluation",
        "Municipal permit requirement check"
      ]
    },
    {
      title: "Dish Mounting and Positioning",
      duration: "45-60 minutes", 
      description: "Professional mounting ensures maximum signal strength and long-term stability.",
      details: [
        "Roof mount installation with weatherproof penetrations",
        "Wall mount setup for optimal signal reception",
        "Ground pole mounting with concrete foundation",
        "Precision dish alignment using professional equipment",
        "Structural reinforcement when required"
      ]
    },
    {
      title: "Cable Routing and Weatherproofing",
      duration: "20-30 minutes",
      description: "Weatherproof cable installation protects your investment and ensures reliable connectivity.",
      details: [
        "Professional-grade cable selection and routing",
        "Exterior wall penetrations with expansion sealing",
        "Cable management and organization",
        "Weatherproof connector installation",
        "Interior cable finishing and organization"
      ]
    },
    {
      title: "System Activation and Optimization",
      duration: "15-20 minutes",
      description: "Complete system configuration and performance verification.",
      details: [
        "Kuiper terminal connection and configuration",
        "Network integration with existing home systems",
        "Speed testing and signal optimization",
        "Service activation and account setup",
        "Customer training and documentation handover"
      ]
    }
  ]

  const equipmentSpecs = [
    {
      component: "Kuiper Terminal",
      specifications: "High-gain phased array antenna, weatherproof housing, integrated Wi-Fi 6",
      included: true
    },
    {
      component: "Mounting Hardware",
      specifications: "Stainless steel brackets, weatherproof bolts, rubber gaskets",
      included: true
    },
    {
      component: "Weatherproof Cables",
      specifications: "Cat6A outdoor rated, up to 150-foot runs, UV resistant",
      included: true
    },
    {
      component: "Power Supply",
      specifications: "48V DC power injector, surge protection, wall mount",
      included: true
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <StructuredData 
        type="Article"
        data={{
          headline: 'Complete Amazon Kuiper Installation Guide 2025',
          description: 'Comprehensive professional guide to Amazon Kuiper satellite internet installation process, requirements, and best practices.',
          author: {
            '@type': 'Organization',
            name: 'KuiperPros'
          },
          datePublished: '2024-12-01',
          dateModified: new Date().toISOString(),
        }}
      />
      
      <StructuredData 
        type="HowTo"
        data={{
          name: 'Professional Amazon Kuiper Installation Process',
          description: 'Step-by-step professional installation guide for Amazon Kuiper satellite internet',
        }}
      />

      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-50 to-white py-16">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete Amazon Kuiper Installation Guide 2025
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to know about professional Kuiper satellite installation. 
                From site assessment to final activation, understand the complete process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/quote">
                  <Button size="lg">Get Professional Installation Quote</Button>
                </Link>
                <Button size="lg" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Installation Checklist
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Clock className="w-8 h-8 text-brand-600 mb-4 mx-auto" />
                  <h3 className="font-semibold text-gray-900 mb-2">2-Hour Average</h3>
                  <p className="text-gray-600">Complete installation time for standard residential setup</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Shield className="w-8 h-8 text-brand-600 mb-4 mx-auto" />
                  <h3 className="font-semibold text-gray-900 mb-2">Certified Installers</h3>
                  <p className="text-gray-600">All technicians are professionally trained and certified</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <CheckCircle className="w-8 h-8 text-brand-600 mb-4 mx-auto" />
                  <h3 className="font-semibold text-gray-900 mb-2">90-Day Warranty</h3>
                  <p className="text-gray-600">Workmanship guarantee on all installations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Installation Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pre-Installation Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Site Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Clear southern sky view (15-degree elevation minimum)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Stable mounting surface (roof, wall, or ground)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Power outlet within 150 feet of installation location</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Access path for technician and equipment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Need</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Kuiper service account (we can help set this up)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Existing internet connection for initial setup</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Home Wi-Fi network credentials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Local permit information (if required)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Installation Process</h2>
            
            <div className="space-y-8">
              {installationSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Equipment & Hardware</h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What's Included in Professional Installation</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Component</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Specifications</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900">Included</th>
                      </tr>
                    </thead>
                    <tbody>
                      {equipmentSpecs.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 font-medium text-gray-900">{item.component}</td>
                          <td className="py-3 px-4 text-gray-600">{item.specifications}</td>
                          <td className="py-3 px-4 text-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Installation Cost Breakdown</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Installation</h3>
                <div className="text-3xl font-bold text-brand-600 mb-4">$199</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Standard roof or wall mount</li>
                  <li>✓ Up to 100 ft cable run</li>
                  <li>✓ Basic system setup</li>
                  <li>✓ 30-day support</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-brand-600">
                <div className="text-center mb-4">
                  <span className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Standard Installation</h3>
                <div className="text-3xl font-bold text-brand-600 mb-4">$299</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Professional mounting options</li>
                  <li>✓ Up to 150 ft cable run</li>
                  <li>✓ Complete system optimization</li>
                  <li>✓ 90-day warranty</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Complex Installation</h3>
                <div className="text-3xl font-bold text-brand-600 mb-4">$599</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Complex mounting solutions</li>
                  <li>✓ Extended cable runs</li>
                  <li>✓ Multiple access points</li>
                  <li>✓ Commercial-grade setup</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Additional Costs May Apply</h3>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Permit fees (varies by municipality)</li>
                    <li>• Additional cable runs beyond included length</li>
                    <li>• Structural reinforcement if required</li>
                    <li>• Challenging access surcharges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-brand-600 text-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Professional Kuiper Installation?</h2>
            <p className="text-xl mb-8 text-brand-100">
              Get connected with certified technicians in your area. Free quotes available in 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg">
                  Get Free Installation Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Play className="w-4 h-4 mr-2" />
                Watch Installation Video
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
