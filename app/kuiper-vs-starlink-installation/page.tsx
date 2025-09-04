import { Metadata } from 'next'
import StructuredData from '@/components/seo/StructuredData'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Check, X, Zap, Clock, DollarSign, Settings, Users, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kuiper vs Starlink vs HughesNet: Installation Complexity and Costs Compared 2025',
  description: 'Complete comparison of Kuiper, Starlink, and HughesNet satellite internet installation. Compare costs, complexity, installation time, and performance. Expert analysis.',
  keywords: 'kuiper vs starlink installation, kuiper vs hughesnet, satellite internet installation comparison, kuiper installation cost, starlink installation cost, professional satellite installation',
  openGraph: {
    title: 'Kuiper vs Starlink vs HughesNet: Installation Comparison',
    description: 'Comprehensive comparison of satellite internet installation costs, complexity, and performance.',
    url: 'https://kuiperpros.com/kuiper-vs-starlink-installation',
  },
}

const comparisonData = {
  kuiper: {
    name: 'Amazon Kuiper',
    installationCost: '$199-$599',
    diyAvailable: 'Limited',
    averageInstallTime: '2 hours',
    professionalRequired: 'Recommended',
    weatherproofing: 'Advanced',
    warrantyPeriod: '90 days',
    equipmentComplexity: 'Moderate',
    dishSize: 'Medium (TBD)',
    powerRequirements: 'Standard',
    pros: [
      'Professional installation network established',
      'Integrated with Amazon ecosystem',
      'Advanced weather protection',
      '90-day installation warranty',
      'Certified technician program'
    ],
    cons: [
      'Service not yet widely available',
      'Limited DIY installation options',
      'Newer technology (less field data)'
    ]
  },
  starlink: {
    name: 'Starlink',
    installationCost: '$0-$400',
    diyAvailable: 'Yes',
    averageInstallTime: '1-3 hours',
    professionalRequired: 'Optional',
    weatherproofing: 'Basic',
    warrantyPeriod: '30-60 days',
    equipmentComplexity: 'Simple',
    dishSize: 'Large',
    powerRequirements: 'High',
    pros: [
      'Self-installation option available',
      'Widely available service',
      'Large user base and community',
      'Established track record',
      'Multiple dish options'
    ],
    cons: [
      'Basic installation support',
      'Limited professional network',
      'Higher power consumption',
      'Large dish size requirements'
    ]
  },
  hughesnet: {
    name: 'HughesNet',
    installationCost: '$99-$299',
    diyAvailable: 'No',
    averageInstallTime: '3-4 hours',
    professionalRequired: 'Yes',
    weatherproofing: 'Standard',
    warrantyPeriod: '60 days',
    equipmentComplexity: 'Complex',
    dishSize: 'Large',
    powerRequirements: 'Standard',
    pros: [
      'Established professional network',
      'Nationwide coverage',
      'Proven installation process',
      'Multiple plan options',
      'Traditional satellite reliability'
    ],
    cons: [
      'Longer installation time',
      'Complex equipment setup',
      'Large dish requirements',
      'Older technology platform'
    ]
  }
}

const installationComplexityFactors = [
  {
    factor: 'Site Survey Requirements',
    kuiper: 'Moderate - southern sky assessment',
    starlink: 'Basic - app-based sky view check',
    hughesnet: 'Comprehensive - precise alignment needed'
  },
  {
    factor: 'Dish Alignment Precision',
    kuiper: 'Moderate - some flexibility',
    starlink: 'Self-adjusting - minimal alignment',
    hughesnet: 'High precision - exact positioning required'
  },
  {
    factor: 'Cable Management',
    kuiper: 'Professional routing recommended',
    starlink: 'Basic routing, outdoor rated',
    hughesnet: 'Complex routing with multiple connections'
  },
  {
    factor: 'Weatherproofing Needs',
    kuiper: 'Advanced sealing and protection',
    starlink: 'Basic weatherproofing included',
    hughesnet: 'Standard professional weatherproofing'
  },
  {
    factor: 'Network Configuration',
    kuiper: 'Simplified setup process',
    starlink: 'Plug-and-play operation',
    hughesnet: 'Professional configuration required'
  }
]

const performanceComparison = [
  {
    metric: 'Download Speeds',
    kuiper: '100-1000 Mbps (projected)',
    starlink: '50-500 Mbps',
    hughesnet: '25-100 Mbps'
  },
  {
    metric: 'Upload Speeds', 
    kuiper: '50-200 Mbps (projected)',
    starlink: '10-50 Mbps',
    hughesnet: '3-10 Mbps'
  },
  {
    metric: 'Latency',
    kuiper: '<50ms (projected)',
    starlink: '20-80ms',
    hughesnet: '600-700ms'
  },
  {
    metric: 'Data Caps',
    kuiper: 'Unlimited (projected)',
    starlink: 'Unlimited (fair use)',
    hughesnet: '10-100GB/month'
  }
]

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData 
        type="Article"
        data={{
          headline: 'Kuiper vs Starlink vs HughesNet: Installation Complexity and Costs Compared',
          description: 'Complete comparison analysis of satellite internet installation options including costs, complexity, and performance metrics.',
          author: {
            '@type': 'Organization',
            name: 'KuiperPros'
          },
          datePublished: '2024-12-01',
          dateModified: new Date().toISOString(),
        }}
      />

      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-50 to-white py-16">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Kuiper vs Starlink vs HughesNet
                <span className="text-brand-600 block">Installation Comparison 2025</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Complete analysis of satellite internet installation costs, complexity, and performance. 
                Make an informed decision with our expert comparison of the three major satellite providers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <Button size="lg">Get Kuiper Installation Quote</Button>
                </Link>
                <Button size="lg" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Compare All Options
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16">
          <div className="container max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Installation Comparison at a Glance
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center p-4 font-semibold text-brand-600">Amazon Kuiper</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Starlink</th>
                    <th className="text-center p-4 font-semibold text-gray-900">HughesNet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Installation Cost</td>
                    <td className="p-4 text-center text-brand-600 font-semibold">{comparisonData.kuiper.installationCost}</td>
                    <td className="p-4 text-center">{comparisonData.starlink.installationCost}</td>
                    <td className="p-4 text-center">{comparisonData.hughesnet.installationCost}</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-4 font-medium">Average Install Time</td>
                    <td className="p-4 text-center text-brand-600 font-semibold">{comparisonData.kuiper.averageInstallTime}</td>
                    <td className="p-4 text-center">{comparisonData.starlink.averageInstallTime}</td>
                    <td className="p-4 text-center">{comparisonData.hughesnet.averageInstallTime}</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">DIY Installation</td>
                    <td className="p-4 text-center">{comparisonData.kuiper.diyAvailable}</td>
                    <td className="p-4 text-center text-green-600 font-semibold">{comparisonData.starlink.diyAvailable}</td>
                    <td className="p-4 text-center text-red-600">{comparisonData.hughesnet.diyAvailable}</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-4 font-medium">Professional Required</td>
                    <td className="p-4 text-center text-brand-600 font-semibold">{comparisonData.kuiper.professionalRequired}</td>
                    <td className="p-4 text-center">{comparisonData.starlink.professionalRequired}</td>
                    <td className="p-4 text-center text-orange-600 font-semibold">{comparisonData.hughesnet.professionalRequired}</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Installation Warranty</td>
                    <td className="p-4 text-center text-brand-600 font-semibold">{comparisonData.kuiper.warrantyPeriod}</td>
                    <td className="p-4 text-center">{comparisonData.starlink.warrantyPeriod}</td>
                    <td className="p-4 text-center">{comparisonData.hughesnet.warrantyPeriod}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Detailed Installation Analysis
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {Object.entries(comparisonData).map(([key, provider]) => (
                <div key={key} className={`bg-white rounded-lg shadow-sm overflow-hidden ${key === 'kuiper' ? 'ring-2 ring-brand-600' : ''}`}>
                  {key === 'kuiper' && (
                    <div className="bg-brand-600 text-white text-center py-2 text-sm font-medium">
                      Recommended Choice
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{provider.name}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Installation Cost:</span>
                        <span className="font-semibold">{provider.installationCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Install Time:</span>
                        <span className="font-semibold">{provider.averageInstallTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Complexity:</span>
                        <span className="font-semibold">{provider.equipmentComplexity}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Advantages</h4>
                      <ul className="space-y-2">
                        {provider.pros.map((pro, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Considerations</h4>
                      <ul className="space-y-2">
                        {provider.cons.map((con, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className={`w-full ${key === 'kuiper' ? '' : 'variant-outline'}`}
                      variant={key === 'kuiper' ? 'default' : 'outline'}
                    >
                      {key === 'kuiper' ? 'Get Kuiper Quote' : `Learn More About ${provider.name}`}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Complexity Breakdown */}
        <section className="py-16">
          <div className="container max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Installation Complexity Factors
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-900">Installation Factor</th>
                    <th className="text-center p-4 font-semibold text-brand-600">Amazon Kuiper</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Starlink</th>
                    <th className="text-center p-4 font-semibold text-gray-900">HughesNet</th>
                  </tr>
                </thead>
                <tbody>
                  {installationComplexityFactors.map((factor, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium">{factor.factor}</td>
                      <td className="p-4 text-center text-sm">{factor.kuiper}</td>
                      <td className="p-4 text-center text-sm">{factor.starlink}</td>
                      <td className="p-4 text-center text-sm">{factor.hughesnet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Performance Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Expected Performance Comparison
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceComparison.map((metric, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-4">{metric.metric}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Kuiper</div>
                      <div className="font-medium text-brand-600">{metric.kuiper}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Starlink</div>
                      <div className="font-medium">{metric.starlink}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">HughesNet</div>
                      <div className="font-medium">{metric.hughesnet}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-brand-600 text-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Choose Amazon Kuiper?</h2>
            <p className="text-xl mb-8 text-brand-100">
              Get professional installation with the most comprehensive service network and warranty coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg">
                  Get Free Kuiper Quote
                </Button>
              </Link>
              <Link href="/installation-guide">
                <Button size="lg" variant="outline">
                  Learn About Kuiper Installation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
