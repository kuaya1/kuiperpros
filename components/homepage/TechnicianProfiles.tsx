'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Wrench, CheckCircle, GraduationCap, Clock } from 'lucide-react'

interface ServiceArea {
  id: string
  region: string
  icon: React.ElementType
  description: string
  features: string[]
}

const serviceAreas: ServiceArea[] = [
  {
    id: '1',
    region: 'West Region',
    icon: Wrench,
    description: 'Covering California, Nevada, Arizona, and surrounding states',
    features: ['Desert installations', 'Mountain terrain', 'Urban high-rise'],
  },
  {
    id: '2',
    region: 'Central Region',
    icon: Shield,
    description: 'Texas, Colorado, Kansas, and central states',
    features: ['Rural properties', 'Commercial sites', 'Agricultural areas'],
  },
  {
    id: '3',
    region: 'East Region',
    icon: GraduationCap,
    description: 'Florida, Georgia, Carolinas, and eastern seaboard',
    features: ['Coastal properties', 'Hurricane zones', 'Dense urban'],
  },
  {
    id: '4',
    region: 'North Region',
    icon: Clock,
    description: 'Minnesota, Wisconsin, Michigan, and northern territories',
    features: ['Cold climate', 'Snow/ice rated', 'Heavy weather'],
  },
]

export default function TechnicianProfiles() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">Professional Network</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">Nationwide<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-600 to-secondary-600">Installation Teams</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experienced satellite installation professionals ready to serve you across all 50 states</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {serviceAreas.map((area, index) => (
            <motion.div key={area.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
              <div className="bg-gradient-to-br from-brand-50 to-accent-50 p-8 flex items-center justify-center"><div className="bg-white rounded-full p-6 shadow-lg group-hover:scale-110 transition-transform duration-300"><area.icon className="h-12 w-12 text-brand-600" /></div></div>
              <div className="p-6"><h3 className="text-xl font-bold text-gray-900 mb-2">{area.region}</h3><p className="text-gray-600 text-sm mb-4">{area.description}</p><div className="border-t border-gray-100 pt-4"><p className="text-xs font-semibold text-gray-500 uppercase mb-3">Installation Types</p><div className="space-y-2">{area.features.map((feature, idx) => (<div key={idx} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /><span className="text-sm text-gray-700">{feature}</span></div>))}</div></div></div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"><div><p className="text-4xl md:text-5xl font-bold mb-2">10+</p><p className="text-brand-200">Years Experience</p></div><div><p className="text-4xl md:text-5xl font-bold mb-2">50</p><p className="text-brand-200">States Covered</p></div><div><p className="text-4xl md:text-5xl font-bold mb-2">100%</p><p className="text-brand-200">Background Checked</p></div><div><p className="text-4xl md:text-5xl font-bold mb-2">90-Day</p><p className="text-brand-200">Warranty Included</p></div></div>
          <div className="mt-8 text-center"><p className="text-brand-100 mb-4 text-lg">Licensed & insured professionals with satellite installation expertise</p><a href="/technician/apply" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-900 font-semibold px-6 py-3 rounded-xl transition-colors"><Award className="h-5 w-5" />Join Our Network</a></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Our installation teams maintain professional certifications</p>
          <div className="flex flex-wrap items-center justify-center gap-8">{['Starlink Certified', 'Satellite Systems', 'OSHA Safety', 'Licensed & Insured', 'Background Checked'].map((cert) => (<div key={cert} className="bg-white rounded-xl px-6 py-3 shadow-md border border-gray-100"><p className="font-semibold text-gray-700">{cert}</p></div>))}</div>
        </motion.div>
      </div>
    </section>
  )
}
